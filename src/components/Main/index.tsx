import React, { useEffect } from 'react'
import Introduction from '@/components/Main/Introduction'
import AboutMe from '@components/Main/AboutMe'
import MyResume from '@components/Main/MyResume'
import MyServices from '@components/Main/MyServices'
import Skills from '@components/Main/Skills'
import ReactGA from 'react-ga'

const Main = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }, [])
  return (
    <main>
      <Introduction />
      <AboutMe />
      <MyResume />
      <MyServices />
      <Skills />
    </main>
  )
}

export default Main
