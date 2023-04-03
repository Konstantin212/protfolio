import '@/styles/globals.css'
import '@/styles/component.css'
import type { AppProps } from 'next/app'
import { initGA } from '@utils/analytics'

initGA()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
