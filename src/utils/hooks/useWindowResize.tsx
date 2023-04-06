import { useEffect, useState } from 'react'

type Breakpoints = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const getWindowBreakpoints = (width: number): Breakpoints | '' => {
  if (width >= 1536) {
    return '2xl'
  } else if (width >= 1280) {
    return 'xl'
  } else if (width >= 1024) {
    return 'lg'
  } else if (width >= 768) {
    return 'md'
  } else if (width >= 640) {
    return 'sm'
  } else {
    return ''
  }
}
const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState({ value: 0, breakpoint: '' })

  useEffect(() => {
    setWindowSize({
      value: window.innerWidth,
      breakpoint: getWindowBreakpoints(window.innerWidth),
    })
  }, [])

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize({
        value: window.innerWidth,
        breakpoint: getWindowBreakpoints(window.innerWidth),
      })
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  return windowSize
}

export default useWindowResize
