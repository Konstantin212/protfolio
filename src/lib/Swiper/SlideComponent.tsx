import { IProjects } from '@utils/workExperience'
import SlidePreview from '@lib/Swiper/SlidePreview'
import SlideContent from '@lib/Swiper/SlideContent'

const SlideComponent = ({
  title,
  image,
  role,
  description,
  keyStack,
  duration,
  url,
  isNDA,
}: IProjects) => {
  return (
    <div className="rounded-sm bg-white shadow-md">
      <SlidePreview isNDA={isNDA} title={title} image={image} />
      <SlideContent
        role={role}
        title={title}
        description={description}
        keyStack={keyStack}
        duration={duration}
        url={url}
      />
    </div>
  )
}

export default SlideComponent
