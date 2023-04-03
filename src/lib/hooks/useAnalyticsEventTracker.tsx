import ReactGA from 'react-ga'

const useAnalyticsEventTracker = (category = 'Default Category') => {
  return (action = 'default action', label = 'default label') => {
    ReactGA.event({ category, action, label })
  }
}
export default useAnalyticsEventTracker
