import React from 'react'
import Contacts from '@components/Main/AboutMe/Contacts'
import CoverLetter from '@components/Main/AboutMe/CoverLetter'
import Section from '@lib/Section'

const AboutMe = () => {
  return (
    <Section>
      <h2 className="heading-2">About Me</h2>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-5 xl:col-span-4">
          {<Contacts />}
        </div>
        <div className="col-span-12 lg:col-span-7 xl:col-span-8">
          {<CoverLetter />}
        </div>
      </div>
    </Section>
  )
}

export default AboutMe
