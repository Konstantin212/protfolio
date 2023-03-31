import React from 'react'
import Introduction from '@/components/Main/Introduction'
import AboutMe from '@components/Main/AboutMe'
import MyResume from '@components/Main/MyResume'
import MyServices from '@components/Main/MyServices'

const Main = () => {
  return (
    <main>
      <Introduction />
      <AboutMe />
      <MyResume />
      <MyServices />
    </main>
  )
}

export default Main
