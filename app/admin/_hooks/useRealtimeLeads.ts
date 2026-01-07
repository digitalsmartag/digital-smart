"use client"

import { useEffect, useState } from "react"

export function useRealtimeLeads() {
  const [lastUpdate, setLastUpdate] = useState<number>(0)

  useEffect(() => {
    // Polling a cada 15 segundos para verificar novos leads
    const interval = setInterval(() => {
      setLastUpdate(prev => prev + 1)
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  const triggerUpdate = () => {
    setLastUpdate(prev => prev + 1)
  }

  return { lastUpdate, triggerUpdate }
}
