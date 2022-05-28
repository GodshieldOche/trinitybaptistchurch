import Link from 'next/link'
import Image from 'next/image'
import { format } from "date-fns"
import blur from './common/blur'


const LiveStream = ({service}) => {
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
        <div className="grid grid-cols-12 gap-2 items-center px-2 md:px-0 ">
            <div className="order-last md:order-first col-span-4 sm:col-span-5 w-full sm:h-full h-[calc(100%-30px)] relative ">
                <Image src={service?.imageUrl?.url}
                    className="object-cover w-full h-full"
                    layout="fill"
                    blurDataURL={blur}
                    placeholder="blur"
                    alt="logo" />
            </div>
            <div className="col-span-8 sm:col-span-7 flex flex-col sm:ml-3">
                <div className="space-y-2">
                    <h1 className="uppercase text-xs font-light !mb-3 ">
                        {service?.service}
                    </h1>
                    <h1 className="font-medium text-base uppercase  ">{truncate(service?.topic, 21, 20)}</h1>
                    <h1 className=" text-xs ">{ date(service?.startTime, service?.endTime) }</h1>

                    <h1 className=" text-xs !mt-8 !mb-3 ">{new Date().toISOString() >= service?.startTime ?
                        "Live stream has started" : "Live stream isn't started" }</h1>

                    <div className="flex items-center space-x-3">
                        <Link href="/events/1">
                            <a>
                                <h1 className="rounded-r-full text-xs  py-1 px-3
                                            border border-primary-light text-[white]
                                            bg-primary-light cursor-pointer
                                            lg:bg-[white] lg:text-primary-light
                                            hover:lg:bg-primary-light hover:lg:text-[#fff]
                                            uppercase
                                            ">Join live</h1>
                            </a>
                        </Link>
                        <h1 className=" text-xs md:text-xs  hover:scale-105 border-b border-b-primary-black cursor-pointer">Bulletin</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveStream
