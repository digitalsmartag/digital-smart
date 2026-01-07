"use client"

import { useEffect, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'

interface SSEEvent {
  type: 'lead_created' | 'lead_updated' | 'lead_deleted' | 'connected'
  data?: any
  timestamp: string
}

export function useServerSentEvents() {
  const [isConnected, setIsConnected] = useState(false)
  const queryClient = useQueryClient()

  useEffect(() => {
    const eventSource = new EventSource('/admin/api/events')

    eventSource.onopen = () => {
      setIsConnected(true)
    }

    eventSource.onmessage = (event) => {
      try {
        const data: SSEEvent = JSON.parse(event.data)

        // Invalidar queries quando receber evento
        if (data.type === 'lead_created' || data.type === 'lead_updated' || data.type === 'lead_deleted') {
          queryClient.invalidateQueries({ queryKey: ['leads'] })
          queryClient.invalidateQueries({ queryKey: ['leads-current-month'] })
          queryClient.invalidateQueries({ queryKey: ['leads-converted'] })
          queryClient.invalidateQueries({ queryKey: ['leads-converted-current-month'] })
          queryClient.invalidateQueries({ queryKey: ['leads-conversion-stats'] })
          queryClient.invalidateQueries({ queryKey: ['leads-lost'] })

          setTimeout(() => {
            queryClient.refetchQueries({ queryKey: ['leads'] })
          }, 100)
        }
      } catch (error) {
        console.error('Erro ao processar evento SSE:', error)
      }
    }

    eventSource.onerror = (error) => {
      setIsConnected(false)
    }

    return () => {
      eventSource.close()
      setIsConnected(false)
    }
  }, [queryClient])

  return { isConnected }
}
