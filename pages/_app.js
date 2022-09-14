// Global styles
import '/src/styles/globals.css'

// 🤳
var ip = require('ip');
const LogRocket = require('logrocket')
const setupLogRocketReact = require('logrocket-react')

if (typeof window !== 'undefined') {
  LogRocket.init('wkjbn7/b')
  LogRocket.identify(ip.address())
  setupLogRocketReact(LogRocket)
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
