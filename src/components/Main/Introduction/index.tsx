import Image from 'next/image'
import { name } from '@utils/contactData'
import Socials from '@components/Socials'
import React from 'react'

const Introduction = () => {
  return (
    <section className="grid h-screen items-center justify-center bg-primary">
      <div className="flex flex-col items-center text-center">
        <Image
          src="/CV.jpg"
          alt="Portfolio photo"
          width={200}
          height={200}
          className="mb-8 h-[200px] w-[200px] rounded-full object-cover"
        />
        <h1 className="mb-8 -rotate-6 font-kaushan text-3xl md:text-5xl">
          <span className="relative py-1 px-4 text-white before:absolute before:top-[25px] before:left-0 before:-ml-3 before:block before:h-1 before:w-4 before:rounded before:bg-white before:content-[''] after:absolute after:top-[25px] after:right-0 after:-mr-3 after:block after:h-1 after:w-4 after:rounded after:bg-white after:content-[''] md:before:top-[40px] md:before:-ml-8 md:before:w-8 md:after:top-[40px] md:after:-mr-8 md:after:w-8">
            {name}
          </span>
        </h1>

        <h3 className="my-8 text-sm text-white md:text-base ">
          <strong className="text-white">Web</strong> Developer |{' '}
          <strong className="text-white">Front End</strong> Developer |{' '}
          <strong className="text-white">Full Stack</strong> Developer
        </h3>

        <Socials />
      </div>
    </section>
  )
}

export default Introduction
