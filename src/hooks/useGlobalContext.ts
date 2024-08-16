import { useContext } from 'react'
import { GlobalContext } from '@/context/GlobalContext'

export function useGlobalContext() {
  const context = useContext(GlobalContext)

  return context
}
