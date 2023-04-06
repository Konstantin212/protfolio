import React from 'react'

interface Props {
  role: string
  title: string
  description: string
  keyStack: string
  duration: string
  url?: string
}

const SlideContent = ({
  title,
  role,
  description,
  keyStack,
  duration,
  url,
}: Props) => {
  return (
    <div className="p-8 sm:h-[660px]">
      <div className="mb-5 text-gray-400">{duration}</div>
      <h3 className="heading-4 sm:h-16">
        {url ? (
          <a href={url} target="_blank">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <div className="mb-5 text-gray-400">{role}</div>
      <p className="mb-5 sm:h-[288px]">{description}</p>
      <div className="mb-5 text-gray-400">{keyStack}</div>
    </div>
  )
}

export default SlideContent
