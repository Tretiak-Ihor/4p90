import Document, { Html, Head, Main, NextScript } from 'next/document'

import createEmotionServer from '@emotion/server/create-instance'

import { createEmotionCache } from '../styles/material-ui/createEmotionCache'
import { theme } from '../styles/material-ui/theme'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					{/* PWA primary color */}
					<meta name="theme-color" content={theme.palette.primary.main} />
					<link rel="shortcut icon" href="/favicon/favicon.ico" />
					<link
						rel="preload"
						as="font"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
						type="font/woff2"
						crossOrigin="true"
					/>
					{/* Inject MUI styles first to match with to prepend: true configuration. */}
					{this.props.emotionStyleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const originalRenderPage = ctx.renderPage

	// You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
	// However, be aware that it can have global side effects.
	const cache = createEmotionCache()
	const { extractCriticalToChunks } = createEmotionServer(cache)

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) =>
				function EnhanceApp(props) {
					return <App emotionCache={cache} {...props} />
				},
		})

	const initialProps = await Document.getInitialProps(ctx)
	// This is important. It prevents Emotion to render invalid HTML.
	const emotionStyles = extractCriticalToChunks(initialProps.html)
	const emotionStyleTags = emotionStyles.styles.map((style) => (
		<style
			data-emotion={`${style.key} ${style.ids.join(' ')}`}
			key={style.key}
			dangerouslySetInnerHTML={{ __html: style.css }}
		/>
	))

	return {
		...initialProps,
		emotionStyleTags,
	}
}

export default MyDocument
