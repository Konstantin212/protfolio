import React from 'react'

interface Props {
  children: React.ReactNode
  isPrimary?: boolean
  screenHeight?: boolean
}

const Section = ({
  children,
  isPrimary = false,
  screenHeight = true,
}: Props) => {
  return (
    <section
      className={`${isPrimary ? 'bg-primary' : 'bg-white'} text-primary-dark`}
    >
      <div
        className={`${
          screenHeight ? 'min-h-screen' : ''
        } container mx-auto py-28 px-10 sm:px-5`}
      >
        {children}
      </div>
    </section>
  )
}

export default Section
