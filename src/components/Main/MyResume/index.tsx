import { Fragment } from 'react'
import exp from '@components/Main/MyResume/experience'
import ExperienceLine from '@components/Main/MyResume/ExperienceLine'

const MyResume = () => {
  return (
    <section className="section-styled">
      <div className="container mx-auto min-h-screen py-28">
        <h2 className="heading-2">My Resume</h2>
        <ul className="relative before:absolute before:inset-y-0 before:left-1/2 before:z-0 before:w-0.5 before:bg-gray-200 before:content-['']">
          {exp.map((e) => (
            <Fragment key={e.title}>
              <li className="relative z-10 mb-5 text-center">
                <h3 className="inline-block rounded bg-gray-200 py-1 px-3 text-lg font-bold uppercase tracking-[5px]">
                  {e.title}
                </h3>
              </li>
              {e.data.map((d, index) => (
                <ExperienceLine
                  key={d.title + d.companyName}
                  data={d}
                  index={index}
                />
              ))}
            </Fragment>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default MyResume
