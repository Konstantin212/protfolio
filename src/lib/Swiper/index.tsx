import React, { useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, FreeMode } from 'swiper'
import { IProjects } from '@utils/workExperience'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SlideComponent from '@lib/Swiper/SlideComponent'
import useWindowResize from '@utils/hooks/useWindowResize'

interface Props {
  slides: IProjects[]
}

const SwiperComponent = ({ slides }: Props) => {
  const { breakpoint } = useWindowResize()
  const slidesPerView = useMemo(() => {
    if (['xl', '2xl'].includes(breakpoint)) {
      return 3
    }
    if (['md', 'lg'].includes(breakpoint)) {
      return 2
    }
    return 1
  }, [breakpoint])
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      freeMode
      navigation
      keyboard
      modules={[Navigation, Pagination, Keyboard, FreeMode]}
    >
      {slides.map((s) => (
        <SwiperSlide key={uuidv4()}>
          <SlideComponent {...s} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperComponent
