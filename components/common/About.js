import React from 'react'
import blur from './blur'
import Image from 'next/image'

const About = ({ preacher }) => {
  return (
      <div className="flex flex-col w-full rounded-2xl items-center text-gray-200 justify-center bg-gray-700 space-y-5 px-2 py-5 md:p-5">
          <h1 className="text-sm text-gray-100 lg:text-base font-medium uppercase">About the speaker</h1>
          <div className="w-[80px] h-[80px] rounded-full float-left mr-2  relative ">
              <Image src={preacher?.imageUrl?.url}
                  className="object-cover rounded-full w-full h-full "
                  layout="fill"
                  blurDataURL={blur}
                  placeholder="blur"
                  alt="logo" />
          </div>
          <h1 className="text-sm uppercase">{ preacher.name }</h1>
          <p className="text-sm md:text-base text-gray-300 md:leading-8 font-light text-justify md:px-1">
              {preacher.about}
          </p>
    </div>
  )
}

export default About