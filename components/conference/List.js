import Filter from "../sermons/Filter"
import Image from "next/image"
import { useState } from "react"
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import Link from "next/link"

const List = () => {
    const [fitlerToggle, setFilterToggle] = useState(false)
    const [sortToggle, setSortToggle] = useState(false)

    const lists = [1, 2, 3, 4, 5]
    return (
        <div className={` md:mt-10`} >
            <div className="container md:px-0 lg:px-[2rem]">
                <h1 className="hidden lg:block uppercase text-center lg:text-left text-sm font-light mb-5">20 Results - Page 1</h1>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-20 ">
                    <h1 className="lg:hidden text-center uppercase text-xs font-light ">20 Results - Page 1</h1>
                    <div className="lg:col-span-7 lg:!mt-10">
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 ">
                            {
                                lists.map(list => (
                                     <Link href={`/resources/conference/${list}`} key={list} >
                                        <a>
                                            <div className="w-full flex flex-row-reverse items-center md:rounded-md md:flex-col bg-[white] space-x-1 md:space-x-0
                                                md:py-0 md:px-0 px-2 py-2 shadow-sm md:shadow-xl hover:md:shadow-2xl hover:md:scale-105 cursor-pointer">
                                                <div className="w-[100px] h-[80px] md:w-full md:h-[170px] md:rounded-t-md rounded-lg  relative">
                                                    <Image src="/img/conference.jpg"
                                                        className="object-cover w-full h-full rounded-lg md:rounded-none md:rounded-t-md "
                                                        layout="fill"
                                                        blurDataURL="data:..."
                                                        placeholder="blur"
                                                        alt="logo" />
                                                </div>
                                                <div className="w-full md:p-5 space-y-2">
                                                    <div className="flex space-x-3">
                                                        <GraphicEqIcon className="text-[orange] !text-base" />
                                                        <OndemandVideoIcon className="text-[red]/80 !text-base" />
                                                        <h1 className="text-xs font-light uppercase">| 5 Sermons</h1>

                                                    </div>
                                                    <h1 className="capitalize !mt-5">The Sovereignty of God</h1>
                                                    <div className="flex items-center !mt-5 space-x-2">
                                                        <div className="h-[25px] w-[25px]  rounded-full relative">
                                                            <Image src="/img/eleazar.jpg"
                                                                className="object-cover w-full h-full rounded-full"
                                                                layout="fill"
                                                                blurDataURL="data:..."
                                                                placeholder="blur"
                                                                alt="logo" />
                                                        </div>
                                                        <h1 className="text-sm  font-light ">Abutu Joshua</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className=" lg:col-span-5 lg:!mt-10 order-first lg:order-last">
                        <Filter fitlerToggle={fitlerToggle} setFilterToggle={setFilterToggle}
                            sortToggle={sortToggle} setSortToggle={setSortToggle} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List
