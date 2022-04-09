import Link from "next/link"
import { useRouter } from "next/router"

const Links = ({ title }) => {
    const router = useRouter()

    return (
        <div className="relative">
            <Link href={`/${title}`} ><a className={`${router.pathname.split("/")[1] === title ? "font-medium" : "font-light"} hover:font-normal hover:text-[black]/70 capitalize `}>{title}</a></Link>
            <div className={` ${router.pathname.split("/")[1] === title ? "h-1" : "h-0"} w-full rounded-md   bg-primary-dark/80 absolute -bottom-[22.5px]  `}></div>
        </div>
        
    )
}

export default Links
