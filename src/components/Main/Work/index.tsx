import React from 'react'
import Section from '@lib/Section'
import { projects } from '@utils/workExperience'
import SwiperComponent from '@lib/Swiper'

const Work = () => {
  return (
    <Section isPrimary>
      <h2 className="heading-2 text-white">Work</h2>
      <SwiperComponent slides={projects} />
    </Section>
  )
}

export default Work
