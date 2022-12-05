import { useAppConfigContext } from '../../../shared/context/app-config'
import Script from 'next/script'

export const GoogleTagManager = ({ container }) => {
  const { env } = useAppConfigContext()

  return (
    <>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
            <iframe 
              title="google tag manager" 
              src="https://www.googletagmanager.com/ns.html?id=${env.GTM_KEY}" 
              height="0" 
              width="0" 
              style="display:none;visibility:hidden"
            />
          `,
        }}
      />
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script', '${container}','${env.GTM_KEY}');
          `,
        }}
      />
    </>
  )
}
