import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useState } from "react"

const Links = ({ title }) => {
    const router = useRouter()
    const [active, setActive] = useState()
    const [toggleMinistries, setToggleMinistries] = useState(false)

    useEffect(() => {
        if (title !== "events & news") {
            setActive(title)
        } else {
            setActive("events")
        }
    }, [title])

    return (
        <div>
            <div
                onMouseOver={() => {
                    if(title === "ministries") {
                        setToggleMinistries(true)
                    }
                }}
                onMouseOut={() => {
                    if(title === "ministries") {
                        setToggleMinistries(false)
                    }
                }}
                className="relative">
                <Link href={`${title !== "ministries" ? "/" + active : "#"}`} >
                    <a className={`${router.pathname.split("/")[1] === active ? "font-medium" : "font-light"} hover:font-normal hover:text-[black]/70 capitalize `}>
                        {title}
                    </a>
                </Link>
                <div className={` ${router.pathname.split("/")[1] === active ? "h-1" : "h-0"} w-full rounded-md   bg-primary-dark/80 absolute -bottom-[22.5px]  `}></div>
            </div>
            {
                title === "ministries" && toggleMinistries &&
                <div
                    onMouseOver={() => {
                        if (title === "ministries") {
                            setToggleMinistries(true)
                        }
                    }}
                    onMouseOut={() => {
                        if (title === "ministries") {
                            setToggleMinistries(false)
                        }
                    }}
                    className="absolute w-36 h-[500]">
                    <div className="-ml-10 mt-6 p-5 space-y-5 rounded-xl flex flex-col h-full shadow-2xl bg-white">
                        <h1 className="text-sm border-b border-b-gray-100 pb-1 capitalize font-light cursor-pointer">Men</h1>
                        <h1 className="text-sm border-b border-b-gray-100 pb-1 capitalize font-light cursor-pointer">Women</h1>
                        <h1 className="text-sm border-b border-b-gray-100 pb-1 capitalize font-light cursor-pointer">Children</h1>
                        <h1 className="text-sm border-b border-b-gray-100 pb-1 capitalize font-light cursor-pointer">Sunday School</h1>
                        <h1 className="text-sm border-b border-b-gray-100 pb-1 capitalize font-light cursor-pointer">Internship</h1>
                        <h1 className="text-sm border-b border-b-gray-100 pb-1 capitalize font-light cursor-pointer">Conferences</h1>
                        {/* <h1 className="text-sm border-b border-b-gray-100 pb-1 capitalize font-light cursor-pointer">Books and Library</h1>
                        <h1 className="text-sm border-b border-b-gray-100 pb-1 capitalize font-light cursor-pointer">Media</h1> */}
                    </div>
                </div>
            }
            
        </div> 
    )
}

export default Links
