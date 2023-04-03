import ReactGA from 'react-ga'

export const initGA = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)
}
