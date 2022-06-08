import { useEffect, useState } from 'react';
import ministriesData from './data'
import { useRouter  } from 'next/router'

const Details = () => {
    const [ data, setData ] = useState('')
    const router = useRouter()
    const {id} = router.query

    useEffect(() => {
        ministriesData.map(data => {
            if (data.id.toString() === id.toString()) {
                setData(data)
            }
        })
    }, [id])
  return (
    <div className="w-full min-h-screen space-y-4">
          <div className="bg-gradient-to-r from-primary-dark to-primary-light text-[white] pt-[100px]  md:pt-[68px] ">
              <div className="container px-2 md:px-0 lg:px-[2rem] pb-16 pt-10 md:pb-36 md:pt-28  flex flex-col items-center justify-center space-y-5">
                  <h1 className="text-xl md:text-3xl text-center uppercase font-medium">{`${data?.title}'s Ministry`}</h1>
                  <h2 className="text-sm md:text-base capitalize max-w-lg mx-auto font-light text-center">
                  </h2>
              </div>
          </div> 
          <div className="max-w-screen-md mx-auto">
              <p className="font-light leading-relaxed px-3 md:px-5">
                  {data?.body}
              </p>
          </div>
    </div>
  )
}

export default Details