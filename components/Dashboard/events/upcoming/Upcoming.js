import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from "next/link";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdminEvents } from '../../../../redux/features/events'
import Loader from "../../../common/Loader";
import { useRouter } from "next/router";
import { format } from 'date-fns'
import { setDeleteModalData, setDeletModalState } from '../../../../redux/features/menu'


const Upcoming = () => {

    const { loading, events, message } = useSelector(state => state.events)
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => { 
        dispatch(getAdminEvents())
    }, [])

    const lister = (index) => {
        const dp = []

        events[index].sessions.map(session => {
            dp.push(session.preacher.name)
        })
        let preachers = [...new Set(dp)];

        return preachers.map(preacher => (
            <h1 key={preacher}>{preacher}</h1>
        ))

    }

    const date = (start, end) => {
        if (start === end) {
            return format(new Date(start), 'MMM, do yyyy')
        } else {
            return `${format(new Date(start), 'do')} - ${format(new Date(end), 'do MMM yyyy')}`
        }
    }


    return (
        <div className="space-y-5">
            <div className="flex justify-center">
                <Link href="/admin/events/upcoming/new">
                    <a>
                        <button className=" flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-2xl
                        bg-primary-light rounded-md shadow-md text-gray-100 px-4 py-2">
                            <h1 className=" uppercase text-sm">Add Upcoming Event</h1>
                            <AddIcon />
                        </button>
                    </a>
                </Link>
            </div>
            {
                loading ? <Loader /> :
                    <table className="w-full ">
                        <thead className="bg-gray-800 text-gray-200 ">
                            <tr className="">
                                <th scope="col" className="text-sm font-medium uppercase px-4 py-4 text-left">
                                    #
                                </th>
                                <th scope="col" className="text-sm font-medium uppercase px-3 py-4 text-left">
                                    Title
                                </th>
                                <th scope="col" className="text-sm font-medium uppercase px-3 py-4 text-left">
                                    Speakers
                                </th>
                                <th scope="col" className="text-sm font-medium uppercase px-3 py-4 text-left">
                                    Date
                                </th>
                                <th scope="col" className="text-sm font-medium uppercase px-3 py-4 text-left">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white  ">
                            {
                                events.map((event, index) => (
                                    <tr key={event._id} className={` transition duration-300 ease-in-out border-b border-b-gray-200`}>

                                        <td className="px-4 py-4 whitespace-nowrap text-sm  ">
                                            <h1>{index + 1}</h1>
                                        </td>
                                        <td className="text-sm px-3 py-4 whitespace-nowrap">
                                            <h1 className="capitalize">{event.title}</h1>
                                        </td>
                                        <td className="text-sm px-3 py-4 whitespace-nowrap">
                                            <div className="flex flex-col space-y-2">
                                                {
                                                    !event.sessions ? <h1 className="capitalize">0 preacher</h1> : lister(index)
                                                }
                                            </div>
                                        </td>
                                        <td className="text-sm px-3 py-4 whitespace-nowrap">
                                            <h1 className="capitalize">{date(event.startDate, event.endDate) }</h1>
                                        </td>
                                        <td className="text-sm  font-light px-3 py-4 whitespace-nowrap">
                                            <div className="flex space-x-2 items-center">
                                                <div 
                                                    onClick={() => {
                                                        router.push(`/admin/events/upcoming/${event._id}`)
                                                    }}
                                                    className="flex justify-center items-center cursor-pointer hover:bg-primary-dark bg-primary-dark/90 w-7 h-7 rounded-full">
                                                    <EditIcon className="!text-white !text-base" />
                                                </div>
                                                <div 
                                                    onClick={() => {
                                                        dispatch(setDeleteModalData({ event, index }))
                                                        dispatch(setDeletModalState(true))
                                                    }}
                                                    className="flex justify-center items-center cursor-pointer hover:bg-red-600 bg-red-600/90 w-7 h-7 rounded-full">
                                                    <DeleteIcon className="!text-white !text-base" />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            }
        </div>
    )
}

export default Upcoming
