import Link from "next/link"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { setMenuState } from "../redux/features/menu"
import { useDispatch } from "react-redux"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useEffect } from "react"
import { useState } from "react"
import ministriesData from './Ministries/data'

const MenuLinks = ({ title }) => {
    const [ministries, setMinistries] = useState(false)
    const [active, setActive] = useState()
    const router = useRouter()
    const { menuState } = useSelector(state => state.menu)
    const dispatch = useDispatch()

    useEffect(() => {
        if (title !== "events & news") {
            setActive(title)
        } else {
            setActive("events")
        }
    }, [title])
    
    const handleClick = () => {
        router.push(`/${active}`)
        dispatch(setMenuState(false))
    }
    

     

    return (
        <div className="flex flex-col space-y-3 mt-4 ">
            <div className={`flex w-full justify-between items-center ${title === "ministries" ? "space-x-1" : "space-x-0"} ${menuState ? "!text-primary-black" : "text-[white]"} 
            transition-all duration-300 ease-in-out`}
                onClick={() => {
                    if (title === "ministries") {
                        setMinistries(!ministries)
                    } else {
                        handleClick()
                    }
                }}
            >

                <h1 className={`${router.pathname.split("/")[1] === active ? "font-medium" : "font-light"} text-xl md:hover:font-medium capitalize cursor-pointer`}>
                    {title}
                </h1>
                
                {
                    title === "ministries" &&
                    <div>
                        {
                            ministries ?
                                <KeyboardArrowUpIcon className=" text-xl " />
                                :
                                <KeyboardArrowDownIcon className=" text-xl " />
                                
                        }

                    </div>
                }

            </div>

            {
                title === "ministries" && ministries && menuState &&
                <div className={`flex flex-col w-full text-lg font-light pl-3 space-y-2  `}>
                        {
                            ministriesData?.map(data => (
                                <h1
                                    key={data.id}
                                    onClick={() => {
                                        router.push(`/ministries/${data.id}`)
                                        dispatch(setMenuState(false))
                                    }}
                                    className="text-sm hover:text-black hover:font-normal border-b border-b-gray-100 pb-1 capitalize font-light cursor-pointer ">
                                    {data.title}
                                </h1>
                            ))
                        }
                </div>
            }
        </div>
        
    )
}

export default MenuLinks
