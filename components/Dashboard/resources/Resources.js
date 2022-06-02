import { useState } from "react"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAdminSermons } from "../../../redux/features/sermons"
import { getAdminSeries } from "../../../redux/features/series"
import { getAdminConference } from "../../../redux/features/conferences"
import { getAdminBibleStudies } from "../../../redux/features/bibleStudies"



let grid = [
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
    const [noOfSermons, setNoOfSermons] = useState(0)
    const [noOfSeries, setNoOfSeries] = useState(0)
    const [noOfConference, setNoOfConference] = useState(0)
    const [noOfStudy, setNoOfStudy] = useState(0)
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        if (router.route === "/admin/resources") {
            router.push("/admin/resources/sermon")
        }
        dispatch(getAdminSermons()).then((result) => {
            if (result.error) {
                console.log(result.error)
            } else {
                setNoOfSermons(result.payload.sermons.length)
            }
        })
        dispatch(getAdminSeries()).then((result) => {
            if (result.error) {
                console.log(result.error)
            } else {
                setNoOfSeries(result.payload.series.length)
            }
        })
        dispatch(getAdminConference()).then((result) => {
            if (result.error) {
                toast.error(result.error)
            } else {
                setNoOfConference(result.payload.conferences.length)
            }
        })
        dispatch(getAdminBibleStudies()).then((result) => {
            if (result.error) {
                console.log(result.error)
            } else {
                setNoOfStudy(result.payload.bibleStudies.length)
            }
        })

    }, [dispatch])


    return (
        <div className="flex w-full flex-col space-y-10 mb-3 p-4">
            <div className="flex justify-between items-center">
                {/* sermons */}
                <div onClick={() => router.push(`/admin/resources/sermon`) }
                    className={` ${router.pathname.includes("/sermon") ? "bg-gray-800" : "bg-white"}
                flex flex-col hover:scale-105 hover:shadow-2xl w-[180px] h-[90px] items-center shadow-lg cursor-pointer justify-center rounded-2xl `}>
                    <h1 className={`${router.pathname.includes("/sermon") ? "text-gray-200" : "text-primary-dark"} uppercase font-medium text-xl`}>{noOfSermons}</h1>
                    <h1 className={`uppercase !text-primary-light font-medium text-xs`}>stand-alone sermons</h1>
                </div>
                {/* series */}
                <div onClick={() => router.push(`/admin/resources/series`) }
                    className={` ${router.pathname.includes("/series") ? "bg-gray-800" : "bg-white"}
                flex flex-col hover:scale-105 hover:shadow-2xl w-[180px] h-[90px] items-center shadow-lg cursor-pointer justify-center rounded-2xl `}>
                    <h1 className={`${router.pathname.includes("/series") ? "text-gray-200" : "text-primary-dark"} uppercase font-medium text-xl`}>{noOfSeries}</h1>
                    <h1 className={`uppercase !text-primary-light font-medium text-xs`}>preaching series</h1>
                </div>
                {/* conference */}
                <div onClick={() => router.push(`/admin/resources/conference`) }
                    className={` ${router.pathname.includes("/conference") ? "bg-gray-800" : "bg-white"}
                flex flex-col hover:scale-105 hover:shadow-2xl w-[180px] h-[90px] items-center shadow-lg cursor-pointer justify-center rounded-2xl `}>
                    <h1 className={`${router.pathname.includes("/conference") ? "text-gray-200" : "text-primary-dark"} uppercase font-medium text-xl`}>{noOfConference}</h1>
                    <h1 className={`uppercase !text-primary-light font-medium text-xs`}>conference messages</h1>
                </div>
                {/* bible study */}
                <div onClick={() => router.push(`/admin/resources/biblestudy`) }
                    className={` ${router.pathname.includes("/biblestudy") ? "bg-gray-800" : "bg-white"}
                flex flex-col hover:scale-105 hover:shadow-2xl w-[180px] h-[90px] items-center shadow-lg cursor-pointer justify-center rounded-2xl `}>
                    <h1 className={`${router.pathname.includes("/biblestudy") ? "text-gray-200" : "text-primary-dark"} uppercase font-medium text-xl`}>{noOfStudy}</h1>
                    <h1 className={`uppercase !text-primary-light font-medium text-xs`}>bible study</h1>
                </div>
            </div>

            {children}
           
        </div>
    )
}

export default Resources
