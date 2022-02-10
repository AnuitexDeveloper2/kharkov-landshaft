import '../components/header/index.scss'
import "../styles/home.scss";
import "../styles/globals.scss";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
