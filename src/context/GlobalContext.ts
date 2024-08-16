import { createContext } from 'react'

export type GlobalConfig = {
  theme: 'light' | 'dark'
}

export const GlobalContext = createContext<GlobalConfig>({
  theme: 'light'
})
