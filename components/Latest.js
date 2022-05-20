import Image from "next/image"
import Link from "next/link";
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import blur from './common/blur'
import { format } from 'date-fns'
import { useRouter } from 'next/router'


const defaultImage = "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1651306705/Global/study_yhfri9.jpg"

const Latest = ({latest}) => {

    const router = useRouter()
    const truncate = (des, val, lim) => {
        if (des.length > val) {
            return des.substr(0, lim) + "..."
        } else {
            return des
        }
    }
    
    return (
        <div className="bg-[white] py-10 px-2 sm:px-0 ">
            <div className="container lg:px-[2rem] space-y-5">
                <div className="flex items-center space-x-1">
                    <span className="w-7 h-[2.5px] bg-primary-dark"></span>
                    <h1 className="text-base lg:text-lg font-medium uppercase">Latest Resources</h1>
                </div>
                
                {/* resource card list */}
                <div className="max-w-screen-lg 2xl:max-w-screen-xl  mx-auto grid gap-2 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        latest.map(list => (
                            <div key={list._id}
                                onClick={() => {
                                    list.category ? 
                                        router.push(`/resources/sermons/${list._id}`) :
                                        router.push(`/resources/biblestudy/${list._id}`)
                                } }
                                className="w-full flex flex-row-reverse items-center md:flex-col md:rounded-md bg-[white] space-x-1 md:space-x-0
                            md:py-0 md:px-0 px-1 py-2 shadow-sm md:shadow-xl hover:md:shadow-2xl hover:md:scale-105 cursor-pointer">
                                <div className="w-[100px] h-[80px] md:w-full md:h-[170px] rounded-lg md:rounded-b-none md:rounded-t-md relative">
                                    <Image src={list.imageUrl?.url ? list.imageUrl?.url : defaultImage}
                                        className="object-cover w-full h-full rounded-lg md:rounded-none md:rounded-t-md"
                                        layout="fill"
                                        blurDataURL={blur}
                                        placeholder="blur"
                                        alt="logo" />
                                    <div className=" hidden md:block uppercase text-xs absolute py-1 px-4 top-3 left-3  bg-white/70">
                                        <div className="flex space-x-1">
                                            <GraphicEqIcon className="text-[orange] !text-base" />
                                            <OndemandVideoIcon className="text-[red]/80 !text-base" />
                                            <h1 className="text-xs font-light uppercase">{`| ${list.category ? "Sermon" : "bible study"}`}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:p-5 space-y-2">
                                    <div className="flex md:hidden space-x-1">
                                        <GraphicEqIcon className="text-[orange] !text-base" />
                                        <OndemandVideoIcon className="text-[red]/80 !text-base" />
                                        <h1 className="text-xs font-light uppercase">{`| ${list.category ? "Sermon" : "bible study"}`}</h1>
                                    </div>
                                    <h1 className="capitalize ">{truncate(list.title, 34, 27)}</h1>
                                    <h1 className="text-sm  font-light">{`${format(new Date(list.date), 'do MMM, yyyy')}`}</h1>
                                    <p className="hidden h-32 max-h-32 md:block  text-sm font-light  text-justify ">{truncate(list.description, 220, 217)}</p>
                                    <div className="flex items-center !mt-5 md:!mt-10 space-x-2">
                                        <div className="h-[25px] w-[25px] md:w-[30px] md:h-[30px] rounded-full relative">
                                            <Image src={list.preacher.imageUrl.url}
                                                className="object-cover w-full h-full rounded-full"
                                                layout="fill"
                                                blurDataURL={blur}
                                                placeholder="blur"
                                                alt="logo" />
                                        </div>
                                        <h1 className="text-sm  font-light md:text-base">{list.preacher.name}</h1>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                 <Link href="/resources">
                    <a>
                        <div className="w-full md:max-w-[250px] mx-auto !mt-5 px-5 py-[5px] flex justify-center
                        bg-primary-light text-[white] cursor-pointer hover:scale-105 hover:shadow-xl ">
                        
                            <h1 className="uppercase text-sm md:text-base">See All</h1>
                            
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Latest
