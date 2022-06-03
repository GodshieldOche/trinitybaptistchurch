import Image from "next/image"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import Link from 'next/link'
import { useSelector } from 'react-redux'
import blur from '../common/blur'
import { format } from 'date-fns'
import { useRouter } from 'next/router'
import parse from 'html-react-parser';



const defaultImage = "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1651307275/Global/conference_eojsyc.jpg"

const Lists = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [toggleDate, setToggleDate] = useState(false);

    const { events, news } = useSelector(state => state.clientEvents)
    const router = useRouter()

    const lister = (index) => {
        const dp = []

        events[index].sessions.map(session => {
            dp.push(session.preacher.imageUrl.url)
        })
        let images = [...new Set(dp)];

        return images.map(image => (
            <div key={image} className="!ml-[-6px] h-[30px] w-[30px] border-2 border-white  rounded-full relative">
                <Image src={image}
                    className="object-cover w-full h-full rounded-full"
                    layout="fill"
                    blurDataURL={blur}
                    placeholder="blur"
                    alt="logo" />
            </div>
        ))

    }


    const date = (start, end) => {
        if (start === end) {
            return format(new Date(start), 'MMM, do yyyy')
        } else {
            return `${format(new Date(start), 'do')} - ${format(new Date(end), 'do MMM yyyy')}`
        }
    }

    const truncate = (des) => {
        if (des.length > 10) {
            return des.substr(0, 257) + "..."
        } else {
            return des
        }
    }

    const parser = (html) => {
        const short = truncate(html)
        return parse(short)
    }

    const handleChange = (date) => {
        setStartDate(date)
        const fDate = new Date(date).toISOString();
        let month = new Date(fDate).getMonth()
        const year = new Date(fDate).getFullYear()
        const nextMonth = new Date(year, month + 1).toISOString()

        router.push(`${router.route}?month=${fDate}&next=${nextMonth}`)
        
    }


   
    return (
        <div className={` md:mt-10`} >
            <div className="container md:px-0 lg:px-[2rem]">
                <h1 onClick={() => setToggleDate(!toggleDate)}
                    className="max-w-[270px] lg:hidden mx-auto text-center bg-primary-dark text-sm text-white py-2  uppercase mt-5">Filter by month</h1>
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-20 ">
                    <div className="lg:col-span-8">
{/* upcoming events */}
                        <div className="flex px-2 items-center mt-7 mb-4 space-x-1">
                            <span className="w-3 h-[2.5px] bg-primary-dark"></span>
                            <h1 className="text-base font-medium uppercase">Upcoming events</h1>
                        </div>
                        <div className="flex flex-col w-full mt-2 md:mt-5 space-y-5">
                            {
                              events.length ?  events.map((event, index) => (
                                    <Link href={`/events/${event._id}`} key={event._id} >
                                        <a>
                                            <div className="flex flex-col w-full md:flex-row items-center shadow-lg hover:scale-105 
                                            hover:shadow-xl space-y-3 md:space-y-0 md:space-x-3 h-fit bg-gray-50/50 py-3 px-3 cursor-pointer">
                                                <div className="flex items-center justify-center w-full h-[200px]  md:w-[170px] md:h-[120px]  relative">
                                                    <Image src={event.imageUrl.url}
                                                        className="object-cover w-full h-full "
                                                        layout="fill"
                                                        blurDataURL={blur}
                                                        placeholder="blur"
                                                        alt="logo" />
                                                    <h1 className="hidden md:block absolute font-medium text-center text-[10px] uppercase px-1 py-2 text-white bg-gray-900/70">{event.type}</h1>
                                                </div>
                                                <div className="w-full flex flex-col space-y-2 px-3 md:px-0">
                                                    <h1 className=" md:hidden text-xs text-center text-primary-dark uppercase font-medium ">{event.type}</h1>
                                                    <div className="flex flex-col-reverse md:flex-row items-center md:justify-between">
                                                        <h1 className="uppercase font-medium">{event.title}</h1>
                                                        <h1 className=" text-sm mb-2 md:mb-0">{date(event.startDate, event.endDate)}</h1>
                                                    </div>
                                                    <p className="font-light text-sm text-justify">
                                                        {truncate(event.description)}
                                                    </p>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center ml-[6px]">
                                                            {
                                                                lister(index)
                                                            }
                                                        </div>

                                                        <h1 className="text-xs rounded-l-full uppercase bg-primary-light text-white py-1 px-3">
                                                            Learn more
                                                        </h1>
                                                    </div>

                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                              ))
                                    : <h1 className="text-center uppercase font-medium"> No Events To Display</h1>
                            }
                        </div>

{/* News */}
                        <div className="flex px-2 items-center mt-7 mb-4 space-x-1">
                            <span className="w-3 h-[2.5px] bg-primary-dark"></span>
                            <h1 className="text-base font-medium uppercase">Latest News</h1>
                        </div>
                        <div className="flex flex-col w-full mt-2 md:mt-5 space-y-5">
                            {
                              news.length ?  news.map((info, index) => (
                                    <Link href={`events/news/${info._id}`} key={info._id} >
                                        <a>
                                            <div className="flex flex-col w-full md:flex-row items-center shadow-lg hover:scale-105 
                                            hover:shadow-xl space-y-3 md:space-y-0 md:space-x-3 h-fit bg-gray-50/50 py-3 px-3 cursor-pointer">
                                                <div className="flex items-center justify-center w-full h-[200px]  md:w-[170px] md:h-[120px]  relative">
                                                    <Image src={info.imageUrl.url}
                                                        className="object-cover w-full h-full "
                                                        layout="fill"
                                                        blurDataURL={blur}
                                                        placeholder="blur"
                                                        alt="logo" />
                                                    <h1 className="hidden md:block absolute font-medium text-center text-[10px] uppercase px-1 py-2 text-white bg-gray-900/70">news</h1>
                                                </div>
                                                <div className="w-full flex flex-col space-y-2 px-3 md:px-0">
                                                    <h1 className=" md:hidden text-xs text-center text-primary-dark uppercase font-medium ">news</h1>
                                                    <div className="flex flex-col-reverse md:flex-row items-center md:justify-between">
                                                        <h1 className="uppercase font-medium">{info.title}</h1>
                                                        <h1 className=" text-sm mb-2 md:mb-0">{format(new Date(info.updatedAt), 'MMM, do yyyy')}</h1>
                                                    </div>
                                                    <p className="font-light text-sm text-justify">
                                                        {parser(info.body)}
                                                    </p>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center ml-[6px]">
                                                          <h1 className="text-sm italic">written by <span>{ info.author.name }</span></h1>
                                                        </div>

                                                        <h1 className="text-xs rounded-l-full uppercase bg-primary-light text-white py-1 px-3">
                                                            Learn more
                                                        </h1>
                                                    </div>

                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                    
                                ))

                                    : <h1 className="text-center uppercase text-lg font-medium"> No News To Display</h1>
                            }
                        </div>
                    </div>
                    <div className={` ${toggleDate ? "" : "hidden lg:block"} lg:!mt-4 lg:col-span-4  w-full order-first lg:order-last flex flex-col justify-center `}>
                        <h1 className="hidden lg:block text-center font-medium uppercase ">Filter by month</h1>
                        <div className="flex !mt-5 flex-col w-full items-center justify-center">
                            <DatePicker
                                selected={startDate}
                                onChange={handleChange}
                                dateFormat="MM/yyyy"
                                showMonthYearPicker
                                inline
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lists
