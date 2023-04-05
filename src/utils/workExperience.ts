export interface IProjects {
  title: string
  image: string
  role: string
  description: string
  keyStack: string
  duration: string
  url?: string
  isNDA: boolean
}

const defaultTemplateBackground =
  'https://t4.ftcdn.net/jpg/01/16/88/37/360_F_116883786_wuckft1sNw1ouQfJ6FuquZnxea3qBlxy.jpg'

export const projects: IProjects[] = [
  {
    title: 'RealiseMe',
    url: 'https://www.realiseme.com/',
    isNDA: false,
    image:
      'https://blog.realiseme.com/blog/wp-content/uploads/2017/07/RMblog_logo3-300x113.png',
    role: 'Front-End Developer',
    description:
      "It's a specialized search portal the central concept is creating a common place for teachers and schools to make the job procedure easier.",
    keyStack: 'Vue, Vuex, HTML, SCSS, JavaScript, GraphQL, Auth0',
    duration: '6 months',
  },
  {
    title: 'USA media company',
    isNDA: true,
    image: defaultTemplateBackground,
    role: 'Front-End Developer',
    description:
      'Media company that provides news, analysis, and rankings of various topics including education, healthcare, finance, travel, and more.',
    keyStack: 'React, Redux, HTML, CSSModules, JavaScript, Storybook',
    duration: '1 year',
  },
  {
    title: 'pr.business',
    url: 'https://pr.business/',
    isNDA: false,
    image: 'https://pr.business/public/images/static/features/pr-logo-new.png',
    role: 'Front-End Developer',
    description:
      'Public Reputation is a site for marketing. Users can review and check listings of different business items.',
    keyStack: 'React, Angular, HTML, SCSS, JavaScript',
    duration: '6 months',
  },
  {
    title: 'Media Advertisement Company',
    isNDA: true,
    image: defaultTemplateBackground,
    role: 'Front-End Developer',
    description:
      'Media company that offers data-driven advertising solutions for linear and streaming television platforms. They provide audience targeting, campaign management, and analytics services, and are known for their strong industry partnerships and successful campaigns for a range of clients.',
    keyStack: 'React, Redux, HTML, StyledComponents, TypeScript, Storybook',
    duration: '1.5 year',
  },
  {
    title: 'AimChat',
    isNDA: false,
    image:
      'https://play-lh.googleusercontent.com/EMZ1ycZ8-UA7rbmhCzfGajwgEQoYc1fpyMkNUYtE5StCeEuVteYOC7zRXRuGBsVLBQ',
    role: 'Front-End Developer',
    description:
      "Internal company chat application for registered users. The Portal provides the ability to exchange messages, and files and save all messages' history.",
    keyStack: 'React, Redux, HTML, SCSS, JavaScript',
    duration: '6 months',
  },
  {
    title: 'Management consulting firm',
    isNDA: true,
    image: defaultTemplateBackground,
    role: 'Full-Stack Developer',
    description:
      'Global management consulting firm that provides strategic consulting services to corporations, governments, and non-profit organizations. They provides a wide range of consulting services, including strategy development, organizational design, operational improvement, marketing and sales, and mergers and acquisitions.',
    keyStack:
      'React, Redux, HTML, StyledComponents, TypeScript, Storybook, Node.js, PostgreSQL, Prisma, Sequelize, AWS',
    duration: '1.5 year',
  },
]
