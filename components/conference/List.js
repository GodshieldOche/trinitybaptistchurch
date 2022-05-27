import Filter from "../sermons/Filter"
import Image from "next/image"
import { useState } from "react"
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import Link from "next/link"
import { useSelector, useDispatch } from "react-redux"
import blur from '../common/blur'
import { format } from 'date-fns'
import { useEffect } from "react"
import { useRouter } from 'next/router'
import { Pagination } from "../common/Pagination";
import { getClientMinisters } from "../../redux/features/client/ministers";

const List = () => {
    const [fitlerToggle, setFilterToggle] = useState(false)
    const [sortToggle, setSortToggle] = useState(false)

    const { conferences, totalItems, resPerPage, topics, preachers, scriptures  } = useSelector(state => state.clientConferences)
    const dispatch = useDispatch()
    const router = useRouter()

    const page = Number(router.query.page) || 1

    useEffect(() => {
        dispatch(getClientMinisters())
    }, [conferences])
    const lister = (index) => {
        const dp = []

        conferences[index].sermons.map(sermon => {
            dp.push(sermon.preacher.imageUrl.url)
        })
        let images = [...new Set(dp)];

        return images.map(image => (
            <div key={image} className="!ml-[-6px] h-[25px] w-[25px] md:h-[35px] md:w-[35px] border-2 border-gray-50  rounded-full relative">
                <Image src={image}
                    className="object-cover w-full h-full rounded-full"
                    layout="fill"
                    blurDataURL={blur}
                    placeholder="blur"
                    alt="logo" />
            </div>
        ))

    }

    return (
        <div className={` md:mt-10`} >
            <div className="container md:px-0 lg:px-[2rem]">
                <h1 className="hidden lg:block uppercase text-center lg:text-left text-sm font-light mb-5">
                    {`${totalItems > 1 ? totalItems + " Results" : totalItems + " Result"} - Page ${page}`}
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-20 ">
                    <h1 className="lg:hidden text-center uppercase text-xs font-light ">
                        {`${totalItems > 1 ? totalItems + " Results" : totalItems + " Result"} - Page ${page}`}
                    </h1>
                    <div className="lg:col-span-7 lg:!mt-10">
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 ">
                            {
                                conferences.map((conference, index) => (
                                     <Link href={`/resources/conference/${conference._id}`} key={conference._id} >
                                        <a>
                                            <div className="w-full flex flex-row-reverse items-center md:rounded-md md:flex-col bg-[white] space-x-1 md:space-x-0
                                                md:py-0 md:px-0 px-2 py-2 shadow-sm md:shadow-xl hover:md:shadow-2xl hover:md:scale-105 cursor-pointer">
                                                <div className="w-[80px] h-[75px] md:w-full md:h-[170px] md:rounded-t-md rounded-lg  relative">
                                                    <Image src={conference.imageUrl.url}
                                                        className="object-cover w-full h-full rounded-lg md:rounded-none md:rounded-t-md "
                                                        layout="fill"
                                                        blurDataURL={blur}
                                                        placeholder="blur"
                                                        alt="logo" />
                                                </div>
                                                <div className="w-full md:p-5 space-y-2">
                                                    <div className="flex space-x-1">
                                                        <GraphicEqIcon className="text-[orange] !text-base" />
                                                        <OndemandVideoIcon className="text-[red]/80 !text-base" />
                                                        <h1 className="text-xs font-light uppercase">
                                                            {`| ${conference.sermons.length > 1 ? conference.sermons.length + " sermons" : conference.sermons.length + " sermon"}`}
                                                        </h1>

                                                    </div>
                                                    <h1 className="capitalize !mt-5">{conference.title}</h1>
                                                    <div className="flex items-center !mt-5 justify-between pr-5 md:pr-0">
                                                        <div className="flex items-center ml-[6px]">
                                                            {lister(index)}
                                                        </div>

                                                        <h1 className="text-xs tracking-wider uppercase ">
                                                            {format(new Date(conference.startDate), 'MMM, do yyyy')}
                                                        </h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                ))
                            }
                        </div>
                        {
                            totalItems > resPerPage &&
                            <div className="flex !my-10 w-full items-center justify-center">
                                <Pagination
                                    resPerPage={resPerPage}
                                    page={page}
                                    totalItems={totalItems}
                                />
                            </div>
                        }
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
