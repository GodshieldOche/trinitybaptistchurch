import Image from "next/image"
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
import 'react-day-picker/dist/style.css';

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
    const [selected, setSelected] = useState();
    const [toggleDate, setToggleDate] = useState(false);

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
    return (
        <div className={` md:mt-10`} >
            <div className="container md:px-0 lg:px-[2rem]">
                <h1 onClick={() => setToggleDate(!toggleDate)}
                    className="max-w-xs lg:hidden mx-auto text-center bg-primary-dark text-base text-white py-2  uppercase mt-5">Filter by date</h1>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-20 ">
                    <div className="col-span-8">
                        <div className="flex flex-col w-full mt-2 md:mt-5 space-y-5">
                            {
                                events.map(event => (
                                    <div key={event.id} className="flex flex-col w-full md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3 h-fit bg-gray-100 py-3 px-3 cursor-pointer">
                                        <div className="flex items-center justify-center w-full h-[200px]  md:w-[170px] md:h-[120px]  relative">
                                            <Image src="/img/study.jpg"
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
                                                <h1 className="uppercase font-medium">{ event.title }</h1>
                                                <h1 className=" text-sm mb-2 md:mb-0">June 11th, 2022</h1>
                                            </div>
                                            <p className="font-light text-sm text-justify">
                                                We call it serious joy not only because it coexists in the same heart, at the same time, with the gravity of reverence and the groaning of sin, but also because it is not peripheral but central...
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center ml-[6px]">
                                                    {
                                                        speakers.map((speaker, index) => (
                                                            <div key={speaker} className={`ml-[-6px] h-[35px] w-[35px] border-2 border-white  rounded-full relative`}>
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
                                ))
                            }
                            
                        </div>
                    </div>
                    <div className={` ${toggleDate ? "" : "hidden lg:block"} col-span-4  w-full order-first lg:order-last flex justify-center `}>
                        <div className="">
                            <DayPicker
                                mode="single"
                                selected={selected}
                                onSelect={setSelected}
                                footer={footer}
                                className="w-full"
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lists
