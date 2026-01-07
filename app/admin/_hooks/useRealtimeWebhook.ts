"use client"

import { useQueryClient } from '@tanstack/react-query'

export function useRealtimeWebhook() {
  const queryClient = useQueryClient()

  const invalidateAllLeadsQueries = () => {
    console.log('🔄 Invalidando todas as queries de leads via webhook...')
    
    // Invalidar todas as queries relacionadas a leads
    queryClient.invalidateQueries({ queryKey: ['leads'] })
    queryClient.invalidateQueries({ queryKey: ['leads-current-month'] })
    queryClient.invalidateQueries({ queryKey: ['leads-converted'] })
    queryClient.invalidateQueries({ queryKey: ['leads-converted-current-month'] })
    queryClient.invalidateQueries({ queryKey: ['leads-conversion-stats'] })
    queryClient.invalidateQueries({ queryKey: ['leads-lost'] })
    
    console.log('✅ Queries invalidadas com sucesso')
  }

  return { invalidateAllLeadsQueries }
}
