import { useState, useEffect, } from 'react';
import {toast} from 'react-toastify';
import { format } from 'date-fns';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux"
import { clearSessions, setModalData, setModalState } from '../../../../redux/features/menu';
import { postCreateEvent } from '../../../../redux/features/addEvent'
import ImageUploader from '../../../common/ImageUploader';
import ButtonLoader from '../../../common/ButtonLoader';

const New = () => {
    const [imagePreview, setImagePreview] = useState('')
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState()
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [day, setDay] = useState('');
    const [days, setDays] = useState(0);
    const [arr, setArr] = useState(['select day']);
    const [loading, setLoading] = useState(false);
    
    const dispatch = useDispatch()
    const { sessions } = useSelector(state => state.menu)
    const { ministers } = useSelector(state => state.ministers)

    useEffect(() => {
        for (let i = 1; i <= days; i++) {
            setArr( prev => [...prev, `Day ${i}`])
        }
        return () => {
            dispatch(clearSessions())
        }
    }, [days]);

    const router = useRouter();

    const date = (start, end) => {

        return `${format(new Date(start), 'h:mm a')} - ${format(new Date(end), 'h:mm a')}`
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        if (sessions && imageUrl && title && type && description && startDate && endDate) {
            dispatch(postCreateEvent({ title, type, description, startDate, endDate, imageUrl, sessions })).then(res => {
                if (!res.error) {
                    dispatch(clearSessions())
                    setLoading(false)
                    toast.success('Event created successfully')
                    router.back()
                } else {
                    console.log(res.error)
                    setLoading(false)
                }
            })
            
        } else {
            toast.info('Please fill all the fields')
            setLoading(false)
        }
        
    }


    return (
        <div className="flex  w-full min-h-screen  my-2  mx-2 rounded-2xl bg-white">
            <div className="w-full flex flex-col space-y-7 h-fit items-center  pt-5 px-3">
                <h1 className="uppercase text-lg text-primary-dark font-medium">Add upcoming event</h1>
                <form className="w-full" autoComplete="off">
                    <div className="w-full h-full grid grid-cols-12 gap-5">
                        <div className="col-span-7 space-y-5 w-full text-gray-700 ">
                            {/* title */}
                            <div className="grid grid-cols-12  w-full items-center gap-2">
                                <div className="col-span-5 space-y-2">
                                    <label htmlFor="title" className="ml-2 text-sm uppercase">Event Type</label>
                                    <input
                                        type="title"
                                        name="title"
                                        className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                        required
                                        value={type}
                                        onChange={(e) => { setType(e.target.value) }}
                                    />
                                </div>
                                <div className="col-span-7 space-y-2">
                                    <label htmlFor="title" className="ml-2 text-sm uppercase">Event title</label>
                                    <input
                                        type="title"
                                        name="title"
                                        className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                        required
                                        value={title}
                                        onChange={(e) => { setTitle(e.target.value) }}
                                    />
                                </div>
                            </div>
                            
                            {/* Description */}
                            <div className="w-full space-y-2">
                                <label htmlFor="description" className="ml-2 text-sm uppercase">event description</label>
                                <textarea
                                    className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                    rows= "10"
                                    value={description}
                                    onChange={(e) => { setDescription(e.target.value) }}
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className="col-span-5 space-y-5 w-full text-gray-700 ">
                            {/* date pickker */}
                            <div className="space-y-2 w-full">
                                <label htmlFor="name" className="ml-2 text-sm uppercase">Event Date</label>
                                <DatePicker
                                    selectsRange={true}
                                    selected={startDate}
                                    startDate={startDate}
                                    endDate={endDate}
                                    className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                    onChange={(dates) => {
                                        const [startDate, endDate] = dates
                                        setStartDate(startDate)
                                        setEndDate(endDate)
                                        setArr(['select day'])
                                        setDays(0)
                                        if (startDate && endDate) {     
                                            const diff = endDate.getTime() - startDate.getTime()
                                            const days = Math.round(diff / (1000 * 60 * 60 * 24))
                                            setDays(days + 1)
                                        }
                                    }}
                                    isClearable={true}
                                />
                            </div>

                            {/* image upload */}
                            <ImageUploader imagePreview={imagePreview} setImagePreview={setImagePreview} setImageUrl={setImageUrl} imageUrl={imageUrl} height={"h-44"} />
                        </div>
                    </div>
                </form>
                <div className="w-full flex items-center space-x-4 ">
                    <h1 className="text-sm uppercase">Number of Days: <span className="font-medium">{days}</span></h1>
                    <select
                        type="text"
                        name="day"
                        className="capitalize text-gray-500 !px-3 py-1 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                        value={day}
                        onChange={(e) => {
                            setDay(e.target.value)
                        }}
                    >
                        {
                            arr.map(day => (
                                <option className="capitalize" key={day} value={day}>{day}</option>
                            ))
                        }
                    </select>
                    <button
                        disabled={day === 'select day' || day === ''}
                        onClick={() => {
                            dispatch(setModalState(true))
                            dispatch(setModalData(day))
                        }}
                        className="disabled:bg-gray-500 uppercase text-xs rounded bg-primary-light text-white  py-1 px-3">Add schedule</button>
                </div>
                <div className="w-full flex flex-col space-y-7 items-center justify-center">
                    <h1 className="uppercase text-lg font-medium">{`Event Scheldule`}</h1>
                    <table className="w-full max-w-full table-auto border-collapse ">
                        <thead className="bg-gray-800 text-gray-200 ">
                            <tr className="">
                                <th scope="col" className="text-sm font-medium uppercase px-4 py-4 text-left">
                                    #
                                </th>
                                <th scope="col" className="text-sm font-medium uppercase px-3 py-4 text-left">
                                    Session
                                </th>
                                <th scope="col" className="text-sm font-medium uppercase px-3 py-4 text-left">
                                    Topic
                                </th>
                                <th scope="col" className="text-sm font-medium uppercase px-3 py-4 text-left">
                                    Preacher
                                </th>
                                <th scope="col" className="text-sm font-medium uppercase px-3 py-4 text-left">
                                    Day
                                </th>
                                <th scope="col" className="text-sm font-medium uppercase px-3 py-4 text-left">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white  ">
                            {
                                sessions && sessions.map((item, index) => (
                                    <tr key={item.id} className={` transition duration-300 ease-in-out border-b border-b-gray-200`}>

                                        <td className="px-4 py-4 whitespace-nowrap text-sm  ">
                                            <h1>{index + 1}</h1>
                                        </td>
                                        <td className="text-sm  px-3 py-4 whitespace-nowrap ">
                                            <div className="flex flex-col space-y-2">
                                                <h1>{date(item.startTime, item.endTime)}</h1>
                                            </div>
                                        </td>
                                        <td className="text-sm  px-3 py-4 whitespace-nowrap ">
                                            <h1 className="capitalize">{item.topic}</h1>
                                        </td>
                                        <td className="text-sm  px-3 py-4 whitespace-nowrap ">
                                            <h1>
                                                {
                                                    ministers.map(minister => {
                                                        if (minister._id === item.preacher) {
                                                            return minister.name
                                                        }
                                                    })
                                                }
                                            </h1>
                                        </td>
                                        <td className="text-sm  px-3 py-4 whitespace-nowrap ">
                                            <div className="flex flex-col space-y-2">
                                                <h1>{ item.day }</h1>
                                            </div>
                                        </td>
                                        <td className="text-sm  font-light px-3 py-4 whitespace-nowrap">
                                            <div className="flex space-x-2 items-center">
                                                <div
                                                    onClick={() => {
                                                        dispatch(setModalState(true))
                                                        dispatch(setModalData(item))
                                                    }}
                                                    className="flex justify-center items-center cursor-pointer hover:bg-primary-dark bg-primary-dark/90 w-7 h-7 rounded-full">
                                                    <EditIcon className="!text-white !text-base" />
                                                </div>
                                                <div className="flex justify-center items-center cursor-pointer hover:bg-red-600 bg-red-600/90 w-7 h-7 rounded-full">
                                                    <DeleteIcon className="!text-white !text-base" />
                                                </div>
                                            </div>
                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-between w-full !mb-3">
                    <h1
                        onClick={() => { router.back() }}
                        className="cursor-pointer text-center text-white py-1.5 rounded-md text-sm  px-7 uppercase bg-red-700">
                        cancel
                    </h1>
                    <button onClick={handleSubmit} className="text-center text-white py-1.5 rounded-md text-sm  px-7 uppercase bg-blue-600">
                        {
                            loading ? <ButtonLoader /> : 'create'
                        }
                    </button>
                </div>

            </div>
        </div>
    )
}

export default New
