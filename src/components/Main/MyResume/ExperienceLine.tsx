import React from 'react'
import { IExperienceData } from '@components/Main/MyResume/experience'

interface Props {
  data: IExperienceData
  index: number
}

const IconSuitcase = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
  >
    <path
      fill="#fff"
      d="M9 6h-2v-2c0-1.104.896-2 2-2h6c1.104 0 2 .896 2 2v2h-2v-1.5c0-.276-.224-.5-.5-.5h-5c-.276 0-.5.224-.5.5v1.5zm7 6v2h8v8h-24v-8h8v-2h-8v-5h24v5h-8zm-2-1h-4v4h4v-4z"
    />
  </svg>
)

const ExperienceLine = ({
  data: {
    title,
    companyName,
    date: [dateFrom, dateTo],
    url,
    description,
  },
  index,
}: Props) => {
  return (
    <li className="relative mb-5 flex items-center">
      <div>
        <div className="absolute top-10 left-1/2 ml-[-21px] flex h-11 w-11 items-center justify-center rounded-full bg-primary-solid p-1">
          <IconSuitcase />
        </div>
      </div>
      <div
        className={`w-[45%] ${index % 2 ? 'ml-auto text-left' : 'text-right'}`}
      >
        <h4 className="heading-4">{title}</h4>
        <div className="mb-5">
          {url ? (
            <a className="text-gray-400 underline" href={url}>
              {companyName}
            </a>
          ) : (
            <span className="text-gray-400">{companyName}</span>
          )}
          <span className="text-gray-400">
            - {dateFrom} - {dateTo}
          </span>
        </div>
        <ul className="mb-5">
          {description.map((d) => (
            <li key={d} className="text-sm">
              {d}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default ExperienceLine
