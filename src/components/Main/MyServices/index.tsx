import React from 'react'
import { listOfServices } from '@utils/servicesData'
import Section from '@lib/Section'

const MyServices = () => {
  return (
    <Section isPrimary>
      <h2 className="heading-2 text-white">My Services</h2>
      <div className="md:flex md:flex-wrap">
        {listOfServices.map((s) => (
          <div key={s.name} className="mb-10 w-full text-center md:w-1/3">
            <div className="m-auto w-full md:w-3/4">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white">
                {s.icon}
              </div>
              <h4 className="heading-4 text-white">{s.name}</h4>
              <p className="h-20 text-sm text-white opacity-70 md:h-48 lg:h-28">
                {s.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default MyServices
