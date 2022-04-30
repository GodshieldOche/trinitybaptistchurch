import Image from "next/image"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import Link from 'next/link'

const events = [
    {
        title: "The New Life",
        id: 1
    },
    {
        title: "The New Birth",
        id: 2
    },
    {
        title: "The Sovereignty of God",
        id: 3
    },
    {
        title: "The Work of christ",
        id: 4
    },
    {
        title: "The Person of Christ",
        id: 5
    },
]

const Lists = () => {
    const speakers = [1, 2, 3]
    const [startDate, setStartDate] = useState(new Date());
    const [toggleDate, setToggleDate] = useState(false);

   
    return (
        <div className={` md:mt-10`} >
            <div className="container md:px-0 lg:px-[2rem]">
                <h1 onClick={() => setToggleDate(!toggleDate)}
                    className="max-w-[270px] lg:hidden mx-auto text-center bg-primary-dark text-sm text-white py-2  uppercase mt-5">Filter by date</h1>
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-20 ">
                    <div className="lg:col-span-8">
                        <div className="flex flex-col w-full mt-2 md:mt-5 space-y-5">
                            {
                                events.map(event => (
                                    <Link href={`/events/${event.id}`} key={event.id} >
                                        <a>
                                            <div  className="flex flex-col w-full md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3 h-fit bg-gray-100 py-3 px-3 cursor-pointer">
                                                <div className="flex items-center justify-center w-full h-[200px]  md:w-[170px] md:h-[120px]  relative">
                                                    <Image src="https://res.cloudinary.com/dk6uhtgvo/image/upload/v1651307275/Global/conference_eojsyc.jpg"
                                                        className="object-cover w-full h-full "
                                                        layout="fill"
                                                        blurDataURL="data:..."
                                                        placeholder="blur"
                                                        alt="logo" />
                                                    <h1 className="hidden md:block absolute text-xs uppercase font-medium px-2 py-1 bg-white/80">Conference</h1>
                                                </div>
                                                <div className="w-full flex flex-col space-y-2 px-3 md:px-0">
                                                    <h1 className=" md:hidden text-xs text-center text-primary-dark uppercase font-medium ">Conference</h1>
                                                    <div className="flex flex-col-reverse md:flex-row items-center md:justify-between">
                                                        <h1 className="uppercase font-medium">{event.title}</h1>
                                                        <h1 className=" text-sm mb-2 md:mb-0">June 11th, 2022</h1>
                                                    </div>
                                                    <p className="font-light text-sm text-justify">
                                                        We call it serious joy not only because it coexists in the same heart, at the same time, with the gravity of reverence and the groaning of sin, but also because it is not peripheral but central...
                                                    </p>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center ml-[6px]">
                                                            {
                                                                speakers.map((speaker, index) => (
                                                                    <div key={speaker} className={`ml-[-6px] h-[30px] w-[30px] border-2 border-white  rounded-full relative`}>
                                                                        <Image src="/img/eleazar.jpg"
                                                                            className="object-cover w-full h-full rounded-full"
                                                                            layout="fill"
                                                                            blurDataURL="data:..."
                                                                            placeholder="blur"
                                                                            alt="logo" />
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>

                                                        <h1 className="text-xs uppercase bg-primary-light text-white py-1 px-3">
                                                            Learn more
                                                        </h1>
                                                    </div>

                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                              
                                ))
                            }
                            
                        </div>
                    </div>
                    <div className={` ${toggleDate ? "" : "hidden lg:block"} lg:!mt-4 lg:col-span-4  w-full order-first lg:order-last flex flex-col justify-center `}>
                        <h1 className="hidden lg:block text-center font-medium uppercase ">Filter by date</h1>
                        <div className="flex !mt-5 flex-col w-full items-center justify-center">
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
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
