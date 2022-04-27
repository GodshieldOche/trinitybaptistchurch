import Image from "next/image"
import Links from "./Links"
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const DashboardLinks = ({active, toggleActive}) => {
    return (
        <div>
            <div className=" fixed top-[73px] bottom-1 rounded-2xl w-[270px] bg-gray-900">
                <div className="flex flex-col py-5 space-y-5 h-full text-gray-100 relative ">
                    <div className="flex flex-col space-y-5 border-b border-b-gray-600 ml-2 px-2 pb-5">
                        <h1 className="uppercase font-semi-bold text-center text-gray-200 ">admin Dashboard</h1>
                        <div className="flex justify-between items-center">
                            <h1 className=" text-gray-300 uppercase text-xs">Godshield Oche</h1>
                            <h1 className="font-light uppercase py-[2px] px-2 bg-green-700 rounded-full text-[10px] text-gray-200">signed in</h1>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2 ml-4">
                        <Links Icon={DashboardCustomizeIcon} path={"/resources/sermon"}  color={"!text-yellow-500"} name={ "resources" }/>
                        <Links Icon={EventNoteIcon} path={"/events/upcoming"} color={"!text-green-700"} name={ "events & news" }/>
                        <Links Icon={SupervisorAccountIcon} path={"/ministers"} color={"!text-orange-600"} name={ "ministers" }/>
                        <Links Icon={AppRegistrationIcon} path={"/register/emails"} color={"!text-indigo-700"} name={ "register" }/>
                    </div>

                    <div className="absolute bottom-0 w-full">
                        <div className="flex justify-center py-2 rounded-b-2xl cursor-pointer bg-red-700">
                            <h1 className="uppercase text-sm">LogOut</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}

export default DashboardLinks
