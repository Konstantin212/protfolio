import React from 'react'
import contactData, { name } from '@utils/contactData'
import { isEmail, isLink } from '@utils/helpers'
import useAnalyticsEventTracker from '@lib/hooks/useAnalyticsEventTracker'

const Contacts = () => {
  const gaEventTracker = useAnalyticsEventTracker('About')

  const handleClick = (title: string) => () => {
    gaEventTracker(title)
  }

  return (
    <ul>
      {contactData.map(({ title, value }) => {
        return (
          <li key={title} className="flex pb-3">
            <span className="block w-1/3 font-bold">{title}</span>
            <span className="block w-2/3 text-gray-400">
              {isLink(value) ? (
                <a
                  onClick={handleClick(title)}
                  href={isEmail(value) ? `mailto:${value}` : value}
                  title={`${title} | ${name}`}
                >
                  {value}
                </a>
              ) : (
                value
              )}
            </span>
          </li>
        )
      })}
    </ul>
  )
}

export default Contacts
