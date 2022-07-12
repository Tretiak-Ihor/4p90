import Head from 'next/head'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { CacheProvider } from '@emotion/react'

import { createEmotionCache } from '../styles/material-ui/createEmotionCache'
import { theme } from '../styles/material-ui/theme'

const clientSideEmotionCache = createEmotionCache()

const MyApp = ({ Component, pageProps, emotionCache = clientSideEmotionCache }) => (
	<CacheProvider value={emotionCache}>
		<Head>
			<meta name="viewport" content="initial-scale=1, width=device-width" />
		</Head>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	</CacheProvider>
)

export default MyApp
