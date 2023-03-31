import React from 'react'
import Section from '@lib/Section'
import {
  hardSkills,
  languages,
  majorSkills,
  softSkills,
} from '@utils/servicesData'
import SkillCircle from '@components/Main/Skills/SkillCircle'
import SkillProgressLine from '@components/Main/Skills/SkillProgressLine'

const Skills = () => {
  return (
    <Section>
      <h2 className="heading-2">Skills</h2>
      <h2 className="heading-3">Major Skills</h2>
      <div className="mb-10 flex flex-wrap">
        {majorSkills.map((s) => (
          <SkillCircle key={s.name} {...s} />
        ))}
      </div>
      <h2 className="heading-3">Hard Skills</h2>
      <div className="mb-10 flex flex-wrap justify-between">
        {hardSkills.map((h) => (
          <SkillProgressLine {...h} key={h.skill} />
        ))}
      </div>
      <h2 className="heading-3">Soft Skills</h2>
      <div className="mb-10 flex flex-wrap justify-between">
        {softSkills.map((h) => (
          <SkillProgressLine {...h} key={h.skill} />
        ))}
      </div>
      <h2 className="heading-3">Languages</h2>
      <div className="flex flex-wrap justify-between">
        {languages.map((h) => (
          <SkillProgressLine {...h} key={h.skill} />
        ))}
      </div>
    </Section>
  )
}

export default Skills
