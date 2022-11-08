import '../styles/css/_normalize.css';
import '../styles/css/_variables.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
