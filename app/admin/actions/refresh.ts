"use server"

import { revalidatePath } from "next/cache"

export async function refreshAdminPages() {
  console.log('🔄 Forçando refresh das páginas admin...')
  
  try {
    revalidatePath('/admin')
    revalidatePath('/admin/leads')
    revalidatePath('/admin/dashboard')
    
    console.log('✅ Páginas admin revalidadas com sucesso')
    return { success: true }
  } catch (error) {
    console.error('❌ Erro ao revalidar páginas:', error)
    return { success: false, error: 'Erro ao revalidar páginas' }
  }
}
