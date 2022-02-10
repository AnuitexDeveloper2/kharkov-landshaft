import '../components/header/index.scss'
import '../components/footer/index.scss'
import "../styles/home.scss";
import "../styles/globals.scss";
import "../styles/services.scss";
import "../styles/about.scss";
import "../styles/portfolio.scss";
import "../styles/contacts.scss";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp 
