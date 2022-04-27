import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'
import Link from "next/link"

const Links = ({ Icon, name, color, path }) => {
    const [active, setActive] = useState("")
    const router = useRouter()

    useEffect(() => {
        const route = router.pathname.split("/admin")[1]
        setActive(route)
        console.log(route)
    }, [])
    return (
        <Link href={`/admin${path}`}>
            <a>
                <div
                    className={` ${active.includes(path.split('/')[1]) ? "text-gray-900 rounded-l-full bg-gray-200 font-medium" : "hover:bg-gray-800 hover:rounded-l-full font-light"} flex space-x-2 cursor-pointer items-center py-2 pl-5 `}>
                    <Icon className={`${color}  !text-lg`} />
                    <h1 className=" tracking-wide capitalize">{name}</h1>
                </div>
            </a>
        </Link>
    )
}

export default Links


// text-gray-900 rounded-l-full bg-gray-100