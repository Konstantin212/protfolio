export const name = 'Kostiantyn Prykhodko'
export const siteUrl = 'https://www.kprykhodko.com'

export const phone = '+491604522185'
export const email = 'kprykhodko.w@gmail.com'
export const location = 'Nuremberg, Germany'

const copySign = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
  >
    <path
      fill="#6b7280"
      d="M6 22v-16h16v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-10.386h-20v20h10.189c3.163 0 9.811-7.223 9.811-9.614zm-3-12.386h-19v19h-2v-21h21v2z"
    />
  </svg>
)

const downloadIcon = (
  <svg
    width="16"
    height="16"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 24 24"
  >
    <path
      fill="#374151"
      d="M16.965 2.381c3.593 1.946 6.035 5.749 6.035 10.119 0 6.347-5.153 11.5-11.5 11.5s-11.5-5.153-11.5-11.5c0-4.37 2.442-8.173 6.035-10.119l.608.809c-3.353 1.755-5.643 5.267-5.643 9.31 0 5.795 4.705 10.5 10.5 10.5s10.5-4.705 10.5-10.5c0-4.043-2.29-7.555-5.643-9.31l.608-.809zm-4.965-2.381v14.826l3.747-4.604.753.666-5 6.112-5-6.101.737-.679 3.763 4.608v-14.828h1z"
    />
  </svg>
)

const data = [
  {
    title: 'Full Name',
    value: name,
    icon: copySign,
  },
  {
    title: 'Phone',
    value: phone,
    icon: copySign,
  },
  {
    title: 'Email',
    value: email,
    href: email,
    icon: copySign,
  },
  {
    title: 'Website',
    value: siteUrl,
    href: siteUrl,
    icon: copySign,
  },
  {
    title: 'Location',
    value: location,
    icon: copySign,
  },
]

export const additionalData = {
  title: 'CV',
  value: 'KostiantynPrykhodko_FullStack.pdf',
  href: '/KostiantynPrykhodko_FullStack.pdf',
  icon: downloadIcon,
}

export default data
