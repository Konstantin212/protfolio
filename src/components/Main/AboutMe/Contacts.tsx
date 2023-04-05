import React from 'react'
import contactData, { additionalData } from '@utils/contactData'
import ContactItem from '@components/Main/AboutMe/ContactItem'

interface Props {
  extended?: boolean
}

const Contacts = ({ extended = false }: Props) => {
  return (
    <ul>
      {contactData.map((data) => {
        return <ContactItem key={data.title} {...data} />
      })}
      {extended && <ContactItem {...additionalData} download />}
    </ul>
  )
}

export default Contacts
