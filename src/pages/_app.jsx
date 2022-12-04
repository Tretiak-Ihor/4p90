import '../../layer0/core-web-vitals-metrics'
import NextApp from 'next/app'
import { AppConfigProvider } from '../shared/context/app-config'
import { getApiUrlFromRequest } from '../shared/helpers'

const App = ({ Component, pageProps, appConfig }) => {
  return (
    <AppConfigProvider data={appConfig}>
      <Component {...pageProps} />
    </AppConfigProvider>
  )
}

App.getInitialProps = async (context) => {
  const appInitialProps = await NextApp.getInitialProps(context)
  const appConfig = await fetch(getApiUrlFromRequest({ req: context.ctx.req, route: 'app-config' })).then((res) =>
    res.json()
  )

  return { ...appInitialProps, appConfig }
}

export default App
