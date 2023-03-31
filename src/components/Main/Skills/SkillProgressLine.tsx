import React from 'react'

interface Props {
  value: string
  skill: string
  colorName: string
}

const SkillProgressLine = ({ value, colorName, skill }: Props) => {
  return (
    <div className="mb-4 w-full px-4 sm:w-1/2 md:w-1/3">
      {skill}
      <div className="mt-1 h-1 overflow-hidden rounded bg-gray-200">
        <div
          className={`${colorName} ${value} custom-bg-image h-1 animate-progress rounded`}
        />
      </div>
    </div>
  )
}

export default SkillProgressLine
