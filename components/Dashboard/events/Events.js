import { useState } from "react"
import News from "./news/News"
import Services from "./services/Services"
import Upcoming from "./upcoming/Upcoming"


const grid = [
    {
        topic: "upcoming events",
        number: 15,
        id: 1
    },
    {
        topic: "news",
        number: 20,
        id: 2
    },
    {
        topic: "services",
        number: 2,
        id: 3
    },
]


const Events = () => {
    const [active, setActive] = useState("upcoming events")
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
                active === "upcoming events" && <Upcoming />
            }
            {
                active === "news" && <News />
            }
            {
                active === "services" && <Services />
            }
            
        </div>
    )
}

export default Events
