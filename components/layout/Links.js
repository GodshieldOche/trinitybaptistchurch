import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useState } from "react"

const Links = ({ title }) => {
    const router = useRouter()
    const [active, setActive] = useState()

    useEffect(() => {
        if (title !== "events & news") {
            setActive(title)
        } else {
            setActive("events")
        }
    }, [title])

    return (
        <div className="relative">
            <Link href={`/${active}`} ><a className={`${router.pathname.split("/")[1] === active ? "font-medium" : "font-light"} hover:font-normal hover:text-[black]/70 capitalize `}>{title}</a></Link>
            <div className={` ${router.pathname.split("/")[1] === active ? "h-1" : "h-0"} w-full rounded-md   bg-primary-dark/80 absolute -bottom-[22.5px]  `}></div>
        </div>
        
    )
}

export default Links
