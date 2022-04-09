import Filter from "./Filter"
import Image from "next/image"
import { useState } from "react"

const List = () => {
    const [fitlerToggle, setFilterToggle] = useState(false)

    const lists = [1,2,3,4,5,6,7,8,9,10]
    return (
        <div className={`${fitlerToggle ? " !h-screen  !overflow-y-hidden  " : "w-full"} md:mt-10`} >
            <div className="container md:px-0 lg:px-[2rem]">
                <h1 className="hidden lg:block uppercase text-center lg:text-left text-sm font-light mb-5">20 Results - Page 1</h1>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-20 ">
                    <h1 className="lg:hidden text-center uppercase text-xs font-light ">20 Results - Page 1</h1>
                    <div className="lg:col-span-7">
                        <div className="flex flex-col mt-2 md:mt-5 space-y-3">
                            {
                                lists.map(list => (
                                    <div key={list} className="flex py-2 hover:bg-secondary-one/10 cursor-pointer items-center justify-between space-x-2 px-2 border-b border-b-primary-black/10">
                                        <div className="flex flex-col space-y-2">
                                            <h1 className="font-light text-xs ">Audio | 9th Feb 2022</h1>
                                            <h1 className=" text-base md:text-lg capitalize ">The King who restores the sinners</h1>
                                            <h1 className="font-light text-sm ">Philippians 3:1-11</h1>
                                            <div className="flex items-center !mt-3 space-x-2">
                                                <div className="h-[25px] w-[25px] rounded-full relative">
                                                    <Image src="/img/eleazar.jpg"
                                                        className="object-cover w-full h-full rounded-full"
                                                        layout="fill"
                                                        blurDataURL="data:..."
                                                        placeholder="blur"
                                                        alt="logo" />
                                                </div>
                                                <h1 className="text-sm  font-light">Eleazar Maduka</h1>
                                            </div>
                                        </div>
                                        <div className="w-[70px] h-[75px] rounded-lg  relative">
                                            <Image src="/img/study.jpg"
                                                className="object-cover rounded-lg w-full h-full "
                                                layout="fill"
                                                blurDataURL="data:..."
                                                placeholder="blur"
                                                alt="logo" />
                                        </div>

                                    </div>
                                ))
                            }
                    
                        </div>
                    </div>
                    <div className=" lg:col-span-5 lg:!mt-10 order-first lg:order-last">
                        <Filter fitlerToggle={fitlerToggle} setFilterToggle={setFilterToggle}  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List
