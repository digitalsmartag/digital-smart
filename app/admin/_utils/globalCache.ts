// Cache global para invalidação do TanStack Query
let globalUpdateTimestamp = 0;
let subscribers = new Set<() => void>();

export function markDataUpdated() {
  globalUpdateTimestamp = Date.now();
  console.log('🔄 Dados marcados como atualizados:', globalUpdateTimestamp);
  
  // Notificar todos os subscribers
  subscribers.forEach(callback => callback());
}

export function getGlobalUpdateTimestamp() {
  return globalUpdateTimestamp;
}

export function subscribeToUpdates(callback: () => void) {
  subscribers.add(callback);
  console.log('👥 Novo subscriber de atualizações');
  
  // Retornar função de unsubscribe
  return () => {
    subscribers.delete(callback);
    console.log('👤 Subscriber removido');
  };
}

export function hasUpdates(since: number) {
  return globalUpdateTimestamp > since;
}
