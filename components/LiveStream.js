import Link from 'next/link'
import Image from 'next/image'
import { format } from "date-fns"
import blur from './common/blur'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


const LiveStream = ({ service, defaultService}) => {
    const router = useRouter()

    const truncate = (des, val, lim) => {
        if (des.length > val) {
            return des.substr(0, lim) + "..."
        } else {
            return des
        }
    }

    const date = (start, end) => {
        return `${format(new Date(start), 'MMM, do yyyy;  h:mm a')} - ${format(new Date(end), 'h:mm a')}`
    }

    return (
        <div className="grid grid-cols-12 gap-2 md:justify-between items-center px-2 md:px-0 ">
            <div className="order-last rounded-md md:order-first col-span-4 sm:col-span-5 md:col-span-6  w-full sm:h-full h-[calc(100%-30px)] relative ">
                <Image src={service ? service?.imageUrl?.url : defaultService?.imageUrl?.url}
                    className="object-cover w-full h-full"
                    layout="fill"
                    blurDataURL={blur}
                    placeholder="blur"
                    alt="logo" />
            </div>
            <div className="col-span-8 sm:col-span-7 md:col-span-6  flex flex-col sm:ml-3">
                <div className="space-y-2">
                    <h1 className="uppercase text-xs font-light !mb-3 ">
                        {service ?service?.service : defaultService.service}
                    </h1>
                    <h1 className="font-medium text-base uppercase  ">{truncate(service ? service?.topic : defaultService.topic, 21, 20)}</h1>
                    <h1 className=" text-xs ">{date(service ? service?.startTime : defaultService.startTime, service ? service?.endTime : defaultService.endTime) }</h1>
                    {
                        service ? 
                            <h1 className=" text-xs !mt-8 !mb-3 capitalize ">{new Date().toISOString() >= service?.startTime ?
                                "Live stream has started" : "Live stream isn't started"}</h1>
                            : 
                            <h1 className=" text-xs !mt-8 !mb-3 capitalize ">Live Stream has ended</h1>
                    }
                    

                    <div className="flex items-center space-x-3">
                        <h1 onClick={() => {
                            service ? router.push('https://meet.google.com/qtf-ccqb-jtz') : router.push(`/search?keyword=${defaultService.topic.trim()}`)
                            }} className="rounded-r-full text-xs  py-1 px-3
                                        border border-primary-light text-[white]
                                        bg-primary-light cursor-pointer
                                        lg:bg-[white] lg:text-primary-light
                                        hover:lg:bg-primary-light hover:lg:text-[#fff]
                                        uppercase
                                        ">
                                {service ? 'Join live' : 'service sermon'}
                            </h1>
                        <h1 className=" text-xs md:text-xs capitalize  hover:scale-105 border-b border-b-primary-black cursor-pointer">{ service ? 'Bulletin' : 'see all'}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveStream
