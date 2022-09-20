// Important Next things
// import type { NextRequest } from 'next/server'

// Global styles
import '/src/styles/globals.css'

// 🤳
const LogRocket = require('logrocket')
const setupLogRocketReact = require('logrocket-react')

if (typeof window !== 'undefined') {
  LogRocket.init('wkjbn7/b')
  LogRocket.identify('p')
  setupLogRocketReact(LogRocket)
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
