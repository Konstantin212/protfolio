import React from 'react'
import Introduction from '@/components/Main/Introduction'
import AboutMe from '@components/Main/AboutMe'
import MyResume from '@components/Main/MyResume'
import MyServices from '@components/Main/MyServices'
import Skills from '@components/Main/Skills'

const Main = () => {
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
