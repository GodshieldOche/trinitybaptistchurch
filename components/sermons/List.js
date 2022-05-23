import Filter from "./Filter"
import Image from "next/image"
import { useState } from "react"
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { format } from 'date-fns'
import blur from '../common/blur'
import { getClientMinisters } from "../../redux/features/client/ministers";

const defaultImage = "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1651307278/Global/sermons_nbw4cx.jpg"

const List = () => {
    const [fitlerToggle, setFilterToggle] = useState(false)
    const [sortToggle, setSortToggle] = useState(false)

    const { sermons } = useSelector(state => state.clientSermons)

    const { topics, preachers, scriptures } = useSelector(state => state.clientSermons)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getClientMinisters())
    },[sermons])

    return (
        <div className={` md:mt-10`} >
            <div className="container md:px-0 lg:px-[2rem]">
                <h1 className="hidden lg:block uppercase text-center lg:text-left text-sm font-light mb-5">
                    {`${sermons.length > 1 ? sermons.length + " Results" : sermons.length + " Result"} - Page 1`}
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-20 ">
                    <h1 className="lg:hidden text-center uppercase text-xs font-light ">
                        {`${sermons.length > 1 ? sermons.length + " Results" : sermons.length + " Result"} - Page 1`}
                    </h1>
                    <div className="lg:col-span-7">
                        <div className="flex flex-col mt-2 md:mt-5 space-y-3">
                            {
                                sermons.map(sermon => (
                                    <Link href={`/resources/sermons/${sermon._id}`} key={sermon._id} >
                                        <a>
                                            <div  className="flex py-3 hover:bg-secondary-one/20 cursor-pointer items-center justify-between space-x-2 px-2 border-b border-b-primary-black/10">
                                                <div className="flex flex-col space-y-2">
                                                    <div className="flex space-x-1">
                                                        <GraphicEqIcon className="text-[orange] !text-base" />
                                                        <OndemandVideoIcon className="text-[red]/80 !text-base" />
                                                        <h1 className="text-xs uppercase font-light ">{'|  ' + format(new Date(sermon.date), 'do MMM yyyy')}</h1>
                                                    </div>
                                                    <h1 className=" text-base md:text-lg capitalize ">{sermon.title}</h1>
                                                    <h1 className="font-light text-sm capitalize ">{`${sermon.book} ${sermon.chapter}:${sermon.verse}`}</h1>
                                                    <div className="flex items-center !mt-3 space-x-2">
                                                        <div className="h-[25px] w-[25px] rounded-full relative">
                                                            <Image src={sermon.preacher.imageUrl.url}
                                                                className="object-cover w-full h-full rounded-full"
                                                                layout="fill"
                                                                blurDataURL={blur}
                                                                placeholder="blur"
                                                                alt="logo" />
                                                        </div>
                                                        <h1 className="text-sm  font-light">{ sermon.preacher?.name }</h1>
                                                    </div>
                                                </div>
                                                <div className="w-[70px] h-[75px] rounded-lg  relative">
                                                    <Image src={sermon?.imageUrl?.url ? sermon.imageUrl.url : defaultImage }
                                                        className="object-cover rounded-lg w-full h-full "
                                                        layout="fill"
                                                        blurDataURL={blur}
                                                        placeholder="blur"
                                                        alt="logo" />
                                                </div>

                                            </div>
                                        </a>
                                    </Link>
                                ))
                            }
                    
                        </div>
                    </div>
                    <div className=" lg:col-span-5 lg:!mt-10 order-first lg:order-last">
                        <Filter
                            topics={topics}
                            preachers={preachers}
                            scriptures={scriptures}
                            fitlerToggle={fitlerToggle}
                            setFilterToggle={setFilterToggle}
                            sortToggle={sortToggle}
                            setSortToggle={setSortToggle} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List
