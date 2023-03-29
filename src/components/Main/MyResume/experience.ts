import { getDate } from '@utils/helpers'

export interface IExperienceData {
  title: string
  companyName: string
  date: string[]
  description: string[]
}

interface IExperience {
  title: string
  data: IExperienceData[]
  isEducation: boolean
}

const exp: IExperience[] = [
  {
    title: 'Work Experience',
    isEducation: false,
    data: [
      {
        title: 'Full Stack Developer',
        companyName: 'SoftServe',
        date: [getDate(new Date(2021, 7)), getDate(new Date(2023, 1))],
        description: [
          'Write code for new feature',
          'Test code and debug any issues',
          'Optimize application performance',
          'Collaborate with team members on project',
          'Attend meetings with clients or stakeholders',
          'Document code and processes',
          'Research new technologies and trends',
          'Implement responsive design for mobile devices',
          'Ensure cross-browser compatibility',
          'Troubleshoot user experience issues',
        ],
      },
      {
        title: 'Front End Developer',
        companyName: 'Aimprosoft',
        date: [getDate(new Date(2016, 4)), getDate(new Date(2021, 7))],
        description: [
          'Write code for new feature',
          'Test code and debug any issues',
          'Optimize application performance',
          'Collaborate with team members on project',
          'Attend meetings with clients or stakeholders',
          'Document code and processes',
          'Research new technologies and trends',
          'Implement responsive design for mobile devices',
          'Ensure cross-browser compatibility',
          'Troubleshoot user experience issues',
        ],
      },
      {
        title: 'Front End Developer',
        companyName: 'Freelance',
        date: [getDate(new Date(2016, 0)), getDate(new Date(2016, 4))],
        description: [
          'Write code for new feature',
          'Optimize application performance',
          'Attend meetings with clients or stakeholders',
          'Implement responsive design for mobile devices',
          'Ensure cross-browser compatibility',
          'Troubleshoot user experience issues',
        ],
      },
    ],
  },
  {
    title: 'Education',
    isEducation: true,
    data: [
      {
        title: 'Master Degree',
        companyName: 'Kharkiv National Technical University',
        date: [getDate(new Date(2011, 8)), getDate(new Date(2016, 6))],
        description: ['Computer Engineer'],
      },
    ],
  },
]

export default exp
