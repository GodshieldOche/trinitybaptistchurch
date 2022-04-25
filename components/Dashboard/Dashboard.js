import DashboardLinks from "./DashboardLinks"
import {useState} from "react"
import Resources from "./resources/Resources"

const Dashboard = () => {
    const [active, setActive] = useState('resources')

    const toggleActive = (name) => {
        if (active !== name) {
            setActive(name)
        }
    }

    return (
        <div className="">
            <h1 className="xl:hidden pt-[70px] text-center uppercase text-lg ">Go To desktop screen</h1>
            <div className="hidden xl:block !w-full container px-1 md:px-0 xl:px-[2rem] lg:px-[1rem]  !pt-[60px]">
                <DashboardLinks toggleActive={toggleActive} active={active} />
                    <div className="flex ml-[280px] rounded-2xl mt-4 bg-gray-200 min-h-screen  ">
                        <Resources />
                    </div>
            </div>
        </div>   
    )
}

export default Dashboard
