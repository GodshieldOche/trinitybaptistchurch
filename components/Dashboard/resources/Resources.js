import { useState } from "react"
import { useRouter } from "next/router"
import { useEffect } from "react"


const grid = [
    {
        topic: "sermon",
        number: 15,
        path: "/sermon",
        id: 1
    },
    {
        topic: "preaching series",
        number: 20,
        path: "/series",
        id: 2
    },
    {
        topic: "conference messages",
        number: 30,
        path: "/conference",
        id: 3
    },
    {
        topic: "bible study",
        number: 40,
        path: "/biblestudy",
        id: 4
    },
]


const Resources = ({children}) => {
    const [active, setActive] = useState("sermon")
    const router = useRouter()

    useEffect(() => {
        if (router.route === "/admin/resources") {
            router.push("/admin/resources/sermon")
        }
    }, [])


    return (
        <div className="flex w-full flex-col space-y-10 mb-3 p-4">
            <div className="flex justify-between items-center">
                {
                    grid.map(item => (
                        <div key={item.id}
                            onClick={() => router.push(`/admin/resources${item.path}`) }
                            className={` ${router.pathname.includes(item.path) ? "bg-gray-800" : "bg-white"}
                        flex flex-col hover:scale-105 hover:shadow-2xl w-[180px] h-[90px] items-center shadow-lg cursor-pointer justify-center rounded-2xl `}>
                            <h1 className={`${router.pathname.includes(item.path) ? "text-gray-200" : "text-primary-dark"} uppercase font-medium text-xl`}>{item.number}</h1>
                            <h1 className={`uppercase !text-primary-light font-medium text-xs`}>{item.topic}</h1>
                        </div>
                    ))
                }
            </div>

            {children}
           
        </div>
    )
}

export default Resources
