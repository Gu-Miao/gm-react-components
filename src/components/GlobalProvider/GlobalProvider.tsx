import { PropsWithChildren } from 'react'
import { GlobalContext, GlobalConfig } from '@/context/GlobalContext'

type GlobalProviderProps = PropsWithChildren<{
  config: GlobalConfig
}>

export function GlobalProvider(props: GlobalProviderProps) {
  return <GlobalContext.Provider value={props.config}>{props.children}</GlobalContext.Provider>
}
