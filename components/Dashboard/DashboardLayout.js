import DashboardLinks from "./DashboardLinks"
import { useState } from "react"
import { useSelector } from "react-redux"
import Modal from "./Modal"
import DeleteModal from "./DeleteModal"

const DashboardLayout = ({ children }) => {

    const { modalState, deletModalState } = useSelector(state => state.menu)

    return (
        <div>
            <h1 className="xl:hidden pt-[70px] text-center uppercase text-lg ">Go To desktop screen</h1>
            <div className="hidden xl:block !w-full container px-1 md:px-0 xl:px-[2rem] lg:px-[1rem]  !pt-[60px]">
                <DashboardLinks />
                <div className="flex ml-[280px] rounded-2xl mt-4 bg-gray-200 min-h-screen mb-4 ">
                   { children }
                </div>
            </div>
            {
                modalState && <Modal />
            }
            {
                deletModalState && <DeleteModal />
            }

        </div>
    )
}

export default DashboardLayout
