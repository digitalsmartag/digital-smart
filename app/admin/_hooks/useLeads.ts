import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getLeads, createLead, updateLead, deleteLead } from '../_data/leads'

export function useLeads() {
  const query = useQuery({
    queryKey: ['leads'],
    queryFn: getLeads,
    staleTime: 1000 * 10, // 10 segundos - atualiza frequentemente
    gcTime: 1000 * 60 * 5, // 5 minutos (garbage collection)
  });
  
  // Logs para debug
  if (query.data) {
    console.log('📊 useLeads: Dados carregados, total de leads:', (query.data as any[])?.length || 0);
  }
  if (query.error) {
    console.error('❌ useLeads: Erro ao buscar leads:', query.error);
  }
  
  return query;
}

export function useCurrentMonthLeads() {
  return useQuery({
    queryKey: ['leads-current-month'],
    queryFn: async () => {
      const { getLeadsFromCurrentMonth } = await import('../_data/leads')
      return getLeadsFromCurrentMonth()
    },
    staleTime: 1000 * 10, // 10 segundos
    gcTime: 1000 * 60 * 5,
  })
}

export function useConvertedLeads() {
  return useQuery({
    queryKey: ['leads-converted'],
    queryFn: async () => {
      const { getConvertedLeads } = await import('../_data/leads')
      return getConvertedLeads()
    },
    staleTime: 1000 * 10, // 10 segundos
    gcTime: 1000 * 60 * 5,
  })
}

export function useConvertedLeadsFromCurrentMonth() {
  return useQuery({
    queryKey: ['leads-converted-current-month'],
    queryFn: async () => {
      const { getConvertedLeadsFromCurrentMonth } = await import('../_data/leads')
      return getConvertedLeadsFromCurrentMonth()
    },
    staleTime: 1000 * 10, // 10 segundos
    gcTime: 1000 * 60 * 5,
  })
}

export function useConversionStats() {
  return useQuery({
    queryKey: ['leads-conversion-stats'],
    queryFn: async () => {
      const { getConversionTimeStats } = await import('../_data/leads')
      return getConversionTimeStats()
    },
    staleTime: 1000 * 10, // 10 segundos
    gcTime: 1000 * 60 * 5,
  })
}

export function useLostLeads() {
  return useQuery({
    queryKey: ['leads-lost'],
    queryFn: async () => {
      const { getLostLeads } = await import('../_data/leads')
      return getLostLeads()
    },
    staleTime: 1000 * 10, // 10 segundos
    gcTime: 1000 * 60 * 5,
  })
}

export function useCreateLead() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: createLead,
    onSuccess: () => {
      console.log('🔄 useCreateLead: Invalidando queries após criar lead...')
      // Invalidar todas as queries relacionadas a leads
      queryClient.invalidateQueries({ queryKey: ['leads'] })
      queryClient.invalidateQueries({ queryKey: ['leads-current-month'] })
      queryClient.invalidateQueries({ queryKey: ['leads-converted'] })
      queryClient.invalidateQueries({ queryKey: ['leads-converted-current-month'] })
      queryClient.invalidateQueries({ queryKey: ['leads-conversion-stats'] })
      queryClient.invalidateQueries({ queryKey: ['leads-lost'] })
      console.log('✅ useCreateLead: Queries invalidadas com sucesso!')
    },
    onError: (error) => {
      console.error('❌ useCreateLead: Erro ao criar lead:', error)
    }
  })
}

export function useUpdateLead() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string, data: any }) => updateLead(id, data),
    onSuccess: () => {
      console.log('🔄 useUpdateLead: Invalidando queries após atualizar lead...')
      queryClient.invalidateQueries({ queryKey: ['leads'] })
      queryClient.invalidateQueries({ queryKey: ['leads-current-month'] })
      queryClient.invalidateQueries({ queryKey: ['leads-converted'] })
      queryClient.invalidateQueries({ queryKey: ['leads-converted-current-month'] })
      queryClient.invalidateQueries({ queryKey: ['leads-conversion-stats'] })
      queryClient.invalidateQueries({ queryKey: ['leads-lost'] })
      console.log('✅ useUpdateLead: Queries invalidadas com sucesso!')
    },
    onError: (error) => {
      console.error('❌ useUpdateLead: Erro ao atualizar lead:', error)
    }
  })
}

export function useDeleteLead() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: deleteLead,
    onSuccess: () => {
      console.log('🔄 useDeleteLead: Invalidando queries após deletar lead...')
      queryClient.invalidateQueries({ queryKey: ['leads'] })
      queryClient.invalidateQueries({ queryKey: ['leads-current-month'] })
      queryClient.invalidateQueries({ queryKey: ['leads-converted'] })
      queryClient.invalidateQueries({ queryKey: ['leads-converted-current-month'] })
      queryClient.invalidateQueries({ queryKey: ['leads-conversion-stats'] })
      queryClient.invalidateQueries({ queryKey: ['leads-lost'] })
      console.log('✅ useDeleteLead: Queries invalidadas com sucesso!')
    },
    onError: (error) => {
      console.error('❌ useDeleteLead: Erro ao deletar lead:', error)
    }
  })
}
