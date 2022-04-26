import List from "./sermon/List"
import { useState } from "react"
import BibleStudy from "./biblestudy/BibleStudy"
import Conference from "./conference/Conference"
import Series from "./series/Series"


const grid = [
    {
        topic: "sermon",
        number: 15,
        id: 1
    },
    {
        topic: "preaching series",
        number: 20,
        id: 2
    },
    {
        topic: "conference messages",
        number: 30,
        id: 3
    },
    {
        topic: "bible study",
        number: 40,
        id: 4
    },
]


const Resources = () => {
    const [active, setActive] = useState("sermon")
    return (
        <div className="flex w-full flex-col space-y-10 mb-3 p-4">
            <div className="flex justify-between items-center">
                {
                    grid.map(item => (
                        <div key={item.id}
                            onClick={() => setActive(item.topic)}
                            className={` ${active === item.topic ? "bg-gray-800" : "bg-white"}
                        flex flex-col hover:scale-105 hover:shadow-2xl w-[180px] h-[90px] items-center shadow-lg cursor-pointer justify-center rounded-2xl `}>
                            <h1 className={`${active === item.topic ? "text-gray-200" : "text-primary-dark"} uppercase font-medium text-xl`}>{item.number}</h1>
                            <h1 className={`uppercase !text-primary-light font-medium text-xs`}>{item.topic}</h1>
                        </div>
                    ))
                }
            </div>
            {
                active === "sermon" && <List />
            }
            {
                active === "bible study" && <BibleStudy />
            }
            {
                active === "conference messages" && <Conference />
            }
            {
                active === "preaching series" && <Series />
            }
        </div>
    )
}

export default Resources