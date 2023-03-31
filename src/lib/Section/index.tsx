import React from 'react'

interface Props {
  children: React.ReactNode
  isPrimary?: boolean
}

const Section = ({ children, isPrimary = false }: Props) => {
  return (
    <section
      className={`${isPrimary ? 'bg-primary' : 'bg-white'} text-primary-dark`}
    >
      <div className="container mx-auto min-h-screen py-28 px-10 sm:px-5">
        {children}
      </div>
    </section>
  )
}

export default Section
