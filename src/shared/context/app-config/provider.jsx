import { AppConfigContext } from './context'

export const AppConfigProvider = ({ children, data }) => {
  return <AppConfigContext.Provider value={data}>{children}</AppConfigContext.Provider>
}
