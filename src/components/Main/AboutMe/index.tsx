import React from 'react'
import Contacts from '@components/Main/AboutMe/Contacts'
import CoverLetter from '@components/Main/AboutMe/CoverLetter'

const AboutMe = () => {
  return (
    <section className="bg-white text-primary-dark dark:text-white">
      <div className="container mx-auto min-h-screen py-28">
        <h2 className="mb-24 text-center text-5xl">About Me</h2>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-5 xl:col-span-4">
            {<Contacts />}
          </div>
          <div className="col-span-12 lg:col-span-7 xl:col-span-8">
            {<CoverLetter />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
