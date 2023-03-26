import React from 'react'
import { socials } from '@utils/socialHelper'
import { isEmail } from '@utils/helpers'

interface iSocialProps {
  secondary?: boolean
}

const Socials = ({ secondary = false }: iSocialProps) => {
  return (
    <ul>
      {socials.map((social) => (
        <li
          key={social.link}
          className="inline-block px-3 first:pl-0 last:pr-0"
        >
          <a
            href={isEmail(social.link) ? `mailto:${social.link}` : social.link}
            title={social.title}
            className={`${
              secondary
                ? 'block rounded-sm bg-primary-dark p-2.5 transition-colors duration-500 hover:bg-primary'
                : ''
            }
              ${isEmail(social.link) ? 'block rounded-md bg-white p-0.5' : ''}`}
          >
            {secondary ? social.iconSecondary : social.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Socials
