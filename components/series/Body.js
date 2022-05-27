import Image from "next/image"
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import blur from '../common/blur'
import About from "../common/About";
import { format } from 'date-fns'

const defaultImage = "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1651307274/Global/series_yvd6gq.jpg"

const Body = ({ series, changeCurrent, current }) => {
    return (
        <div className="container lg:px-[2rem]  ">
            <h1 className="text-xs lg:hidden uppercase bg-primary-dark text-center text-white px-5 py-2 lg:py-0"><a href="#all">View All from this series</a></h1>
            <div className="flex flex-col justify-center !mt-5 !lg:mt-0 items-center space-y-3 mb-3">
                
                <h1 className="text-xs text-center lg:text-left tracking-widest font-light uppercase">{format(new Date(current.date), 'do MMM yyyy')}</h1>
                <h1 className="text-xl md:text-3xl font-medium text-center lg:text-left uppercase">{current.title}</h1>

                <div className="flex flex-col font-light uppercase text-sm space-y-2">
                    <div className="flex items-center space-x-2 justify-center ">
                        <h1 className=" ">Scripture:</h1>
                        <h1 className=" ">{`${current.book} ${current.chapter}:${current.verse}`}</h1>
                    </div>
                    <div className="flex items-center space-x-2 justify-center ">
                        <h1 className=" ">Speaker:</h1>
                        <h1 className=" ">{current.preacher.name}</h1>
                    </div>
                </div>
                
            </div>
            
            <div className="grid grid-cols-1 md:!mt-10 lg:grid-cols-12 items-start gap-5 ">

                {/* first grid */}
                <div className="lg:col-span-7 px-2 md:px-0">
                    <div className="flex flex-col space-y-3 w-full">
                       

                        <div className="flex flex-col !mb-12 !mt-10 space-y-3">
                            
                            <h1 className="mx-1 text-sm lg:text-base uppercase">About the message</h1>
                            <p className="md:text-lg md:leading-8 font-light text-justify px-1">
                                {current.description}
                            </p>
                        </div>
                        <About preacher={current.preacher} />

                    </div>
                </div>

                {/* second grid */}
                <div id="all" className={` lg:col-span-5 h-fit  lg:max-h-[500px] mx-2 lg:mx-0 py-5 shadow-2xl px-0 md:px-2 pt-3  overflow-y-auto overscroll-contain`}>
                    <div className="flex flex-col  md:mt-5 !space-y-3  ">
                        <h1 className="text-center text-xs uppercase">Part of a Series</h1>
                        <h1 className="text-center  font-medium uppercase">{ series.title }</h1>
                            {
                                series.sermons.map((sermon, index) => (
                                    <div
                                        onClick={() => changeCurrent(index)}
                                        key={sermon._id} className={`${current._id === sermon._id ? "bg-primary-dark text-gray-200" : "lg:hover:bg-gray-300 lg:hover:text-gray-800"} flex py-3 cursor-pointer  items-center justify-between space-x-2 px-2 border-b border-b-primary-black/10`}>
                                        <div className="flex flex-col space-y-2">
                                            <div className="flex space-x-1">
                                                <GraphicEqIcon className="text-[orange] !text-base" />
                                                <OndemandVideoIcon className="text-[red]/80 !text-base" />
                                                <h1 className="text-xs tracking-widest font-light uppercase">{'|  ' + format(new Date(sermon.date), 'do MMM yyyy')}</h1>
                                            </div>
                                            <h1 className=" text-base md:text-lg capitalize ">{`${index + 1}. ${sermon.title} `}</h1>
                                            <h1 className="font-light text-sm capitalize tracking-wide ">{`${sermon.book} ${sermon.chapter}:${sermon.verse}`}</h1>
                                            <div className="flex items-center !mt-3 space-x-2">
                                                <div className="h-[25px] w-[25px] rounded-full relative">
                                                    <Image src={sermon.preacher.imageUrl.url}
                                                        className="object-cover w-full h-full rounded-full"
                                                        layout="fill"
                                                        blurDataURL={blur}
                                                        placeholder="blur"
                                                        alt="logo" />
                                                </div>
                                                <h1 className="text-sm  font-light capitalize">{sermon.preacher.name}</h1>
                                            </div>
                                        </div>
                                        <div className="w-[70px] h-[75px] rounded-lg  relative">
                                            <Image src={sermon.imageUrl?.url ? sermon.imageUrl.url : defaultImage}
                                                className="object-cover rounded-lg w-full h-full "
                                                layout="fill"
                                                blurDataURL={blur}
                                                placeholder="blur"
                                                alt="logo" />
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Body
