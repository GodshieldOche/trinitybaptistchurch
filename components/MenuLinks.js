import Link from "next/link"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { setMenuState } from "../redux/features/menu"
import { useDispatch } from "react-redux"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from "react"

const MenuLinks = ({ title }) => {
    const [ministries, setMinistries] = useState(false)
    const router = useRouter()
    const { menuState } = useSelector(state => state.menu)
    const dispatch = useDispatch()
    
    const handleClick = () => {
        router.push(`/${title}`)
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

                <h1 className={`${router.pathname.split("/")[1] === title ? "font-medium" : "font-light"} text-2xl md:text-xl md:hover:font-medium capitalize cursor-pointer`}>
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
                <div className={`flex flex-col w-full font-light space-y-1`}>
                    <a>Men</a>
                    <a>Women</a>
                    <a>Children</a>
                </div>
            }
        </div>
        
    )
}

export default MenuLinks
