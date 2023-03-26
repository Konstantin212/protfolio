import React from 'react'
import Socials from '@components/Socials'

const CoverLetter = () => {
  return (
    <div>
      <h2 className="mb-6 text-3xl">Welcome to my portfolio website!</h2>
      <p className="mb-6 leading-relaxed text-slate-600">
        My name is Kostiantyn Prykhodko, and I am a Full-Stack developer with a
        strong focus on Front End development. I have been working on enterprise
        projects since 2016, and I have experience working on many different
        projects with varying degrees of complexity. As a Front End Architect
        and Lead of the Front End team, I have built and launched a lot of
        successful projects. My tech stack includes JavaScript, Typescript,
        React, Vue, Node.js, RestAPI, GraphQL, Html, CSS, and many other
        technologies the knowledge about that I have collected during my career.{' '}
      </p>
      <p className="mb-6 leading-relaxed text-slate-600">
        My passion for Front End development drives me to stay up-to-date with
        the latest technologies and trends, ensuring that I am always delivering
        the best possible solutions for my clients.
      </p>
      <Socials secondary />
    </div>
  )
}

export default CoverLetter
