import '../styles/globals.css'
import '../styles/newstyle.css'
import { SessionProvider } from 'next-auth/react'
import { useState } from 'react'
function MyApp({ Component, pageProps }) {
  return (<>
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  </>
  )
}

export default MyApp
