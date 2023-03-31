import { ReactElement } from 'react'

interface IServices {
  name: string
  icon: ReactElement
  value: string
}

interface IMajorSkills {
  name: string
  value: number
}

interface ISkills {
  skill: string
  value: string
  colorName: string
}
export const listOfServices: IServices[] = [
  {
    name: 'Web Development',
    icon: (
      <svg
        clipRule="evenodd"
        fillRule="evenodd"
        width="50"
        height="50"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FF9000"
          d="m11.6 11c0-.552-.448-1-1-1-1.655 0-4.945 0-6.6 0-.552 0-1 .448-1 1v9c0 .552.448 1 1 1h6.6c.552 0 1-.448 1-1 0-2.092 0-6.908 0-9zm9.4 6c0-.552-.448-1-1-1h-6c-.538 0-1 .477-1 1v3c0 .552.448 1 1 1h6c.552 0 1-.448 1-1zm0-13c0-.552-.448-1-1-1-1.537 0-4.463 0-6 0-.552 0-1 .448-1 1v9.6c0 .552.448 1 1 1h6c.552 0 1-.448 1-1 0-2.194 0-7.406 0-9.6zm-9.4 0c0-.552-.448-1-1-1-1.655 0-4.945 0-6.6 0-.552 0-1 .448-1 1v3.6c0 .552.448 1 1 1h6.6c.552 0 1-.448 1-1 0-1.017 0-2.583 0-3.6z"
          fillRule="nonzero"
        />
      </svg>
    ),
    value:
      'Develop high-quality, responsive, and user-friendly websites using modern front-end technologies like HTML, CSS, JavaScript, and various front-end frameworks like React, Angular, or Vue.',
  },
  {
    name: 'Performance Optimization',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
      >
        <path
          fill="#FF9000"
          d="M22 14c0 5.523-4.478 10-10 10s-10-4.477-10-10 4.478-10 10-10 10 4.477 10 10zm-2 0c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8 8-3.589 8-8zm-6-11.819v-2.181h-4v2.181c1.408-.238 2.562-.243 4 0zm6.679 3.554l1.321-1.321-1.414-1.414-1.407 1.407c.536.402 1.038.844 1.5 1.328zm-8.679 2.265v6h6c0-3.309-2.691-6-6-6z"
        />
      </svg>
    ),
    value:
      'Optimize website performance by improving page load times, minimizing network requests, and reducing the size of web assets like images, CSS, and JavaScript.',
  },
  {
    name: 'Database Design',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="47"
        height="47"
        viewBox="0 0 24 24"
      >
        <path
          fill="#FF9000"
          d="M12.967 21.893c-.703.07-1.377.107-1.959.107-3.412 0-8.008-1.002-8.008-2.614v-2.04c2.117 1.342 5.17 1.78 8.008 1.78.339 0 .681-.007 1.022-.021-.06-.644-.036-1.28.129-2.019-.408.026-.797.04-1.151.04-3.412 0-8.008-1.001-8.008-2.613v-2.364c2.116 1.341 5.17 1.78 8.008 1.78 1.021 0 2.068-.06 3.089-.196 1.91-1.766 4.603-2.193 6.903-1.231v-8.14c0-3.362-5.965-4.362-9.992-4.362-4.225 0-10.008 1.001-10.008 4.361v15.277c0 3.362 6.209 4.362 10.008 4.362 1.081 0 2.359-.086 3.635-.281-.669-.495-1.239-1.115-1.676-1.826zm-1.959-19.893c3.638 0 7.992.909 7.992 2.361 0 1.581-5.104 2.361-7.992 2.361-3.412.001-8.008-.905-8.008-2.361 0-1.584 4.812-2.361 8.008-2.361zm-8.008 4.943c2.117 1.342 5.17 1.78 8.008 1.78 2.829 0 5.876-.438 7.992-1.78v2.372c0 1.753-5.131 2.614-7.992 2.614-3.426-.001-8.008-1.007-8.008-2.615v-2.371zm15.5 7.057c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm-.564 6.55l-1.839-1.778.735-.758 1.09 1.05 2.43-2.439.751.744-3.167 3.181z"
        />
      </svg>
    ),
    value:
      'Design and develop database schemas and queries using relational databases like MySQL, PostgreSQL, or Oracle, or non-relational databases like MongoDB or Redis.',
  },
  {
    name: 'API Development',
    icon: (
      <svg
        width="50"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 24 24"
      >
        <path
          fill="#FF9000"
          d="M12.02 0c6.614.011 11.98 5.383 11.98 12 0 6.623-5.376 12-12 12-6.623 0-12-5.377-12-12 0-6.617 5.367-11.989 11.981-12h.039zm3.694 16h-7.427c.639 4.266 2.242 7 3.713 7 1.472 0 3.075-2.734 3.714-7m6.535 0h-5.523c-.426 2.985-1.321 5.402-2.485 6.771 3.669-.76 6.671-3.35 8.008-6.771m-14.974 0h-5.524c1.338 3.421 4.34 6.011 8.009 6.771-1.164-1.369-2.059-3.786-2.485-6.771m-.123-7h-5.736c-.331 1.166-.741 3.389 0 6h5.736c-.188-1.814-.215-3.925 0-6m8.691 0h-7.685c-.195 1.8-.225 3.927 0 6h7.685c.196-1.811.224-3.93 0-6m6.742 0h-5.736c.062.592.308 3.019 0 6h5.736c.741-2.612.331-4.835 0-6m-12.825-7.771c-3.669.76-6.671 3.35-8.009 6.771h5.524c.426-2.985 1.321-5.403 2.485-6.771m5.954 6.771c-.639-4.266-2.242-7-3.714-7-1.471 0-3.074 2.734-3.713 7h7.427zm-1.473-6.771c1.164 1.368 2.059 3.786 2.485 6.771h5.523c-1.337-3.421-4.339-6.011-8.008-6.771"
        />
      </svg>
    ),
    value:
      'Design and develop RESTful APIs or GraphQL schemas and integrate them with web applications.',
  },
  {
    name: 'Testing and Debugging',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="47"
        height="47"
        viewBox="0 0 24 24"
      >
        <path
          fill="#FF9000"
          d="M24 21.172l-5.66-5.659c1.047-1.581 1.66-3.475 1.66-5.513 0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10c2.038 0 3.932-.613 5.512-1.66l5.66 5.66 2.828-2.828zm-22-11.172c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8-8-3.589-8-8zm13 1.006c0 .239-.196.432-.439.432h-.995c-.231 0-.479.138-.532.473-.043.269.112.484.318.576l1.009.449c.221.098.318.354.22.572-.102.217-.361.314-.581.216l-1.068-.475c-.139-.063-.292-.029-.4.151-.446.735-1.31 1.464-2.532 1.6-1.246-.139-2.12-.894-2.557-1.643-.089-.152-.247-.164-.374-.107l-1.068.475c-.221.098-.479.001-.581-.216-.099-.218-.001-.474.22-.572l1.009-.449c.218-.097.359-.306.313-.609-.046-.285-.29-.44-.527-.44h-.996c-.243-.001-.439-.194-.439-.433s.196-.432.439-.432h1.001c.229 0 .47-.147.514-.462.034-.242-.114-.451-.322-.531l-.929-.362c-.226-.088-.337-.338-.248-.56.09-.222.345-.332.57-.244l.956.371c.123.047.298.032.392-.183.076-.169.16-.328.25-.477.713.416 1.497.624 2.377.624.867 0 1.661-.212 2.374-.625.095.154.183.318.259.494.081.183.249.221.386.168l.956-.371c.226-.088.48.021.57.244.089.222-.022.472-.248.56l-.929.361c-.2.077-.358.273-.32.556.038.274.272.438.512.438h1.001c.243-.001.439.192.439.431zm-6.587-4.847c.134.03.25.112.321.228.258.429-.078.796-.391 1.179.504.235 1.046.351 1.657.351.602 0 1.148-.119 1.654-.353-.308-.377-.644-.753-.389-1.177.071-.116.188-.198.321-.228.265-.058.465-.291.465-.573.001-.323-.265-.586-.595-.586-.393 0-.677.369-.575.74.038.141.018.29-.057.415-.169.279-.457.447-.824.449-.372-.002-.656-.173-.824-.449-.074-.125-.095-.274-.057-.415.102-.372-.182-.74-.575-.74-.33 0-.596.263-.596.586 0 .282.2.515.465.573z"
        />
      </svg>
    ),
    value:
      'Perform unit testing, integration testing, and end-to-end testing to ensure that web applications function as expected. You can also debug issues and resolve errors.',
  },
  {
    name: 'Code Reviews and Mentoring',
    icon: (
      <svg
        clipRule="evenodd"
        fillRule="evenodd"
        width="60"
        height="60"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FF9000"
          d="m17.5 11c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm-5.346 6.999c-.052.001-.104.001-.156.001-4.078 0-7.742-3.093-9.854-6.483-.096-.159-.144-.338-.144-.517s.049-.358.145-.517c2.111-3.39 5.775-6.483 9.853-6.483 4.143 0 7.796 3.09 9.864 6.493.092.156.138.332.138.507 0 .179-.062.349-.15.516-.58-.634-1.297-1.14-2.103-1.472-1.863-2.476-4.626-4.544-7.749-4.544-3.465 0-6.533 2.632-8.404 5.5 1.815 2.781 4.754 5.34 8.089 5.493.09.529.25 1.034.471 1.506zm3.071-2.023 1.442 1.285c.095.085.215.127.333.127.136 0 .271-.055.37-.162l2.441-2.669c.088-.096.131-.217.131-.336 0-.274-.221-.499-.5-.499-.136 0-.271.055-.37.162l-2.108 2.304-1.073-.956c-.096-.085-.214-.127-.333-.127-.277 0-.5.224-.5.499 0 .137.056.273.167.372zm-3.603-.994c-2.031-.19-3.622-1.902-3.622-3.982 0-2.208 1.792-4 4-4 1.804 0 3.331 1.197 3.829 2.84-.493.146-.959.354-1.389.615-.248-1.118-1.247-1.955-2.44-1.955-1.38 0-2.5 1.12-2.5 2.5 0 1.363 1.092 2.472 2.448 2.499-.169.47-.281.967-.326 1.483z"
          fillRule="nonzero"
        />
      </svg>
    ),
    value:
      'Review code written by other developers and provide feedback and suggestions for improvement. You can also mentor junior developers and help them improve their full-stack or front-end development skills.',
  },
]

export const majorSkills: IMajorSkills[] = [
  {
    name: 'HTML5',
    value: 95,
  },
  {
    name: 'CSS3',
    value: 90,
  },
  {
    name: 'JavaScript',
    value: 90,
  },
  {
    name: 'React',
    value: 90,
  },
  {
    name: 'Node.js',
    value: 85,
  },
  {
    name: 'Vue.js',
    value: 90,
  },
  {
    name: 'Communication',
    value: 95,
  },
  {
    name: 'Responsibility',
    value: 95,
  },
]

export const hardSkills: ISkills[] = [
  {
    skill: 'TypeScript',
    value: 'w-[90%]',
    colorName: 'bg-tech-typeScript',
  },
  {
    skill: 'AGGrid',
    value: 'w-[80%]',
    colorName: 'bg-tech-aggrid',
  },
  {
    skill: 'Redux/Sagas',
    value: 'w-[90%]',
    colorName: 'bg-tech-reduxSagas',
  },
  {
    skill: 'GraphQL',
    value: 'w-[85%]',
    colorName: 'bg-tech-graphQL',
  },
  {
    skill: 'Styled-Components',
    value: 'w-[80%]',
    colorName: 'bg-tech-styledComponents',
  },
  {
    skill: 'CSSModules',
    value: 'w-[80%]',
    colorName: 'bg-tech-CSSModules',
  },
  {
    skill: 'PostgreSQL',
    value: 'w-[75%]',
    colorName: 'bg-tech-postgreSQL',
  },
  {
    skill: 'MySQL',
    value: 'w-[75%]',
    colorName: 'bg-tech-mySQL',
  },
  {
    skill: 'MongoDB',
    value: 'w-[70%]',
    colorName: 'bg-tech-mongoDB',
  },
  {
    skill: 'jQquery',
    value: 'w-[80%]',
    colorName: 'bg-tech-jquery',
  },
  {
    skill: 'Bootstrap',
    value: 'w-[85%]',
    colorName: 'bg-tech-bootstrap',
  },
  {
    skill: 'TailwindCSS',
    value: 'w-[90%]',
    colorName: 'bg-tech-tailwindCSS',
  },
  {
    skill: 'AJAX',
    value: 'w-[90%]',
    colorName: 'bg-tech-ajax',
  },
  {
    skill: 'BEM',
    value: 'w-[95%]',
    colorName: 'bg-tech-bem',
  },
  {
    skill: 'TDD',
    value: 'w-[95%]',
    colorName: 'bg-tech-tdd',
  },
  {
    skill: 'Unit Testing',
    value: 'w-[90%]',
    colorName: 'bg-tech-unitTesting',
  },
  {
    skill: 'Integration Testing',
    value: 'w-[80%]',
    colorName: 'bg-tech-integrationTesting',
  },
  {
    skill: 'E2E Testing',
    value: 'w-[75%]',
    colorName: 'bg-tech-e2eTesting',
  },
  {
    skill: 'Agile',
    value: 'w-[90%]',
    colorName: 'bg-tech-agile',
  },
  {
    skill: 'GIT',
    value: 'w-[90%]',
    colorName: 'bg-tech-git',
  },
  {
    skill: 'Grunt',
    value: 'w-[70%]',
    colorName: 'bg-tech-grunt',
  },
  {
    skill: 'Gulp',
    value: 'w-[65%]',
    colorName: 'bg-tech-gulp',
  },
  {
    skill: 'Bower',
    value: 'w-[60%]',
    colorName: 'bg-tech-bower',
  },
  {
    skill: 'Webpack',
    value: 'w-[85%]',
    colorName: 'bg-tech-webpack',
  },
  {
    skill: 'React Native (In Progress)',
    value: 'w-[5%]',
    colorName: 'bg-tech-reduxSagas',
  },
  {
    skill: 'Python (In Progress)',
    value: 'w-[5%]',
    colorName: 'bg-tech-postgreSQL',
  },
]

export const softSkills: ISkills[] = [
  {
    skill: 'Problem-solving',
    value: 'w-[90%]',
    colorName: 'bg-tech-problemSolving',
  },
  {
    skill: 'Time-management',
    value: 'w-[95%]',
    colorName: 'bg-tech-timeManagement',
  },
  {
    skill: 'Adaptability',
    value: 'w-[95%]',
    colorName: 'bg-tech-adaptability',
  },
  {
    skill: 'Attention to detail',
    value: 'w-[85%]',
    colorName: 'bg-tech-attentionToDetail',
  },
  {
    skill: 'Leadership',
    value: 'w-[80%]',
    colorName: 'bg-tech-leadership',
  },
  {
    skill: 'Teamwork',
    value: 'w-[95%]',
    colorName: 'bg-tech-teamwork',
  },
  {
    skill: 'Positive attitude',
    value: 'w-[95%]',
    colorName: 'bg-tech-positiveAttitude',
  },
  {
    skill: 'Business acumen',
    value: 'w-[90%]',
    colorName: 'bg-tech-businessAcumen',
  },
  {
    skill: 'User-centric mindset',
    value: 'w-[85%]',
    colorName: 'bg-tech-userCentricMindset',
  },
]

export const languages = [
  {
    skill: 'Ukrainian',
    value: 'w-[100%]',
    colorName: 'bg-tech-bower',
  },
  {
    skill: 'English (Fluent)',
    value: 'w-[85%]',
    colorName: 'bg-tech-aggrid',
  },
  {
    skill: 'German (Beginner / In Progress)',
    value: 'w-[30%]',
    colorName: 'bg-tech-e2eTesting',
  },
]
