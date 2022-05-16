import React from 'react'
import blur from './blur'
import Image from 'next/image'

const About = ({ preacher }) => {
  return (
      <div className="flex flex-col w-full rounded-2xl items-center text-gray-200 justify-center bg-gray-700 space-y-5 p-5">
          <h1 className="text-sm text-gray-100 lg:text-base font-medium uppercase">About the speaker</h1>
          <div className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] rounded-full float-left mr-2  relative ">
              <Image src={preacher?.imageUrl?.url}
                  className="object-cover rounded-full w-full h-full "
                  layout="fill"
                  blurDataURL={blur}
                  placeholder="blur"
                  alt="logo" />
          </div>
          <h1 className="text-sm uppercase">{ preacher.name }</h1>
          <p className="text-base text-gray-300 md:leading-8 font-light text-justify px-1">
              {preacher.about}
          </p>
    </div>
  )
}

export default About