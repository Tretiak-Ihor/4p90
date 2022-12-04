import { useContext } from 'react'
import { AppConfigContext } from './context'

export const useAppConfigContext = () => {
  const context = useContext(AppConfigContext)

  if (!context) {
    throw new Error('AppConfigContext must be used within a AppConfigProvider')
  }

  return context
}
