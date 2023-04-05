import { isEmail } from '@utils/helpers'
import { name } from '@utils/contactData'
import React, { ReactElement, SyntheticEvent } from 'react'

interface ItemProps {
  title: string
  value: string
  href?: string
  download?: boolean
  icon?: ReactElement | null
}
const ContactItem = ({
  title,
  href = '',
  value,
  download = false,
  icon = null,
}: ItemProps) => {
  const handleClick =
    (value: string, isDownload: boolean) =>
    (e: SyntheticEvent): void => {
      if (!isDownload) {
        e.preventDefault()
        navigator.clipboard.writeText(value)
      }
    }
  return (
    <li key={title} className="flex flex-wrap pb-3">
      <span className="block w-1/3 font-bold">{title}</span>
      <span className="flex w-2/3 min-w-[285px] items-center text-xs text-gray-400 sm:text-base">
        {href ? (
          <a
            href={isEmail(href) ? `mailto:${href}` : href}
            title={`${title} | ${name}`}
            download={download ? value : null}
            className="mr-3"
          >
            {value}
          </a>
        ) : (
          <span className="mr-3 text-gray-400">{value}</span>
        )}
        {icon && (
          <a
            href={href}
            download={download ? value : null}
            title={download ? 'Download' : 'Copy'}
            onClick={handleClick(value, download)}
          >
            {icon}
          </a>
        )}
      </span>
    </li>
  )
}

export default ContactItem
