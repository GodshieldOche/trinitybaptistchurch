import Link from 'next/link'
import Image from 'next/image'
import blur from './common/blur'
import { format } from "date-fns"
import { useRouter } from 'next/router'

const Upcoming = ({event, defaultEvent}) => {

    const router = useRouter()
    const truncate = (des, val, lim) => {
        if (des.length > val) {
            return des.substr(0, lim) + "..."
        } else {
            return des
        }
    }

    const date = (start, end) => {
        if (start === end) {
            return format(new Date(start), 'MMM, do yyyy')
        } else {
            return `${format(new Date(start), 'do')} - ${format(new Date(end), 'do MMM yyyy')}`
        }
    }
    return (
        <div className="grid grid-cols-12 gap-2 items-center px-2 md:px-0 ">
            <div className="order-last rounded-md col-span-4 sm:col-span-5 md:col-span-6  w-full sm:h-full h-[calc(100%-30px)] relative ">
                <Image src={event ? event?.imageUrl?.url : defaultEvent?.imageUrl?.url}
                    className="object-cover w-full h-full"
                    layout="fill"
                    blurDataURL={blur}
                    placeholder="blur"
                    alt="logo" />
            </div>
            <div className="col-span-8 sm:col-span-7 md:col-span-6  flex flex-col sm:ml-3">
                <div className="space-y-2">
                    <h1 className="uppercase text-xs font-light !mb-3 ">{event ? event?.type : defaultEvent.type}</h1>
                    <h1 className="font-medium text-base uppercase  ">{truncate(event ? event?.title : defaultEvent.title, 25, 24) }</h1>
                    <h1 className=" text-xs ">{date(event ? event?.startDate : defaultEvent.startDate, event ? event?.endDate : defaultEvent.endDate)}</h1>

                    <h1 className=" text-xs !mt-8 !mb-3 capitalize ">{event ? 'Would be attending?' : 'No upcoming event at the moment'}</h1>

                    <div className="flex items-center space-x-3">
                        <h1
                            onClick={() => {
                                event ? router.push(`events/${event._id}`) : router.push(`/search?keyword=${defaultEvent.topic.trim()}`)
                            }} 
                            className="rounded-r-full text-xs  py-1 px-3
                                                border border-primary-light text-[white]
                                                bg-primary-light cursor-pointer
                                                lg:bg-[white] lg:text-primary-light
                                                hover:lg:bg-primary-light hover:lg:text-[#fff]
                                                uppercase
                                                ">
                                {event ? 'Learn more' : 'event sermons'}
                        </h1>
                        <Link href="/events" >
                            <a>
                                <h1 className=" text-xs md:text-xs hover:text-gray-500 border-b border-b-primary-black cursor-pointer">See all</h1>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upcoming
