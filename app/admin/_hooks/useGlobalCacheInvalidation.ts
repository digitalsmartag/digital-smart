"use client"

import { useEffect, useRef, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'

// Cache global compartilhado (em produção, usar Redis ou similar)
let globalUpdateTimestamp = 0;
let updateCallbacks = new Set<() => void>();

// Função para marcar que dados foram atualizados (chamada pelo servidor)
export function markDataUpdated() {
  globalUpdateTimestamp = Date.now();
  updateCallbacks.forEach(callback => {
    try {
      callback();
    } catch (error) {
      // Silenciar erros de callbacks individuais
    }
  });
}

// Hook para se inscrever em atualizações globais
export function useGlobalCacheInvalidation() {
  const queryClient = useQueryClient();
  const lastUpdateRef = useRef(globalUpdateTimestamp);
  const [hasUpdates, setHasUpdates] = useState(false);
  
  useEffect(() => {
    // Função para invalidar queries quando há atualizações
    const handleUpdate = () => {
      console.log('🔄 Invalidando queries devido a atualização global...');
      
      // Invalidar todas as queries relacionadas a leads
      queryClient.invalidateQueries({ queryKey: ['leads'] });
      queryClient.invalidateQueries({ queryKey: ['leads-current-month'] });
      queryClient.invalidateQueries({ queryKey: ['leads-converted'] });
      queryClient.invalidateQueries({ queryKey: ['leads-converted-current-month'] });
      queryClient.invalidateQueries({ queryKey: ['leads-conversion-stats'] });
      queryClient.invalidateQueries({ queryKey: ['leads-lost'] });
      
      lastUpdateRef.current = globalUpdateTimestamp;
      setHasUpdates(true);
      
      console.log('✅ Queries invalidadas via cache global!');
    };
    
    // Se houver atualização desde o último render, invalidar agora
    if (globalUpdateTimestamp > lastUpdateRef.current) {
      handleUpdate();
    }
    
    // Adicionar callback para futuras atualizações
    updateCallbacks.add(handleUpdate);
    
    // Cleanup: remover callback
    return () => {
      updateCallbacks.delete(handleUpdate);
    };
  }, [queryClient]);
  
  return {
    lastUpdate: globalUpdateTimestamp,
    hasUpdates
  };
}
