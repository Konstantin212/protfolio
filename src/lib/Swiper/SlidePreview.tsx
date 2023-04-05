import React from 'react'
import Image from 'next/image'

interface Props {
  image: string
  title: string
  isNDA: boolean
}

const SlidePreview = ({ image, title, isNDA }: Props) => (
  <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden bg-blue-50 shadow-md">
    <Image
      src={image}
      alt={title}
      width={200}
      height={300}
      className={isNDA ? 'h-full w-full' : 'w-3/4'}
    />
    {isNDA && (
      <span className="absolute flex h-full w-full items-center justify-center text-4xl text-white">
        NDA
      </span>
    )}
  </div>
)

export default SlidePreview
