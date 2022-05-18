import { useDispatch, useSelector } from "react-redux"
import { setModalState, setSessions } from "../../redux/features/menu"
import { useState, useEffect } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getAdminMinisters } from "../../redux/features/getMinisters";
import ButtonLoader from "../common/ButtonLoader";
import { setEventSessions } from '../../redux/features/event'
import { useRouter } from 'next/router'

const Modal = () => {
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [topic, setTopic] = useState('');
    const [preacherName, setPreacherName] = useState('');
    const [description, setDescription] = useState('');
    const [id, setId] = useState(Math.random());
    const [loading, setLoading] = useState('');
    

    const { modalData } = useSelector(state => state.menu)
    const { ministers } = useSelector(state => state.ministers)
    const dispatch = useDispatch()
    const router = useRouter()


    useEffect(() => { 
        dispatch(getAdminMinisters())
        const { startTime, endTime, topic, description, preacher, id } = modalData

        if (modalData._id) {
            ministers.map(minister => {
                if (minister._id === preacher._id) {
                    setPreacherName(minister.name)
                }
            })
            if (startTime, endTime, topic, description) {
                setStartTime(new Date(startTime))
                setEndTime(new Date(endTime))
                setTopic(topic)
                setDescription(description)
                setId(id)
            }
        } else {
            ministers.map(minister => {
                if (minister._id === preacher) {
                    setPreacherName(minister.name)
                }
            })
            if (startTime, endTime, topic, description, id) {
                setStartTime(startTime)
                setEndTime(endTime)
                setTopic(topic)
                setDescription(description)
                setId(id)
            }
        }
        
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        let preacher = ''
        let name = ''
        ministers.forEach(minister => {
            if (minister.name === preacherName) {
                preacher = minister._id
                name = minister.name
            }
        })
        
        if (modalData._id && router.query.id) {
            const session = {
                _id: modalData._id,
                topic,
                preacher,
                description,
                startTime,
                endTime,
            }

            dispatch(setEventSessions(session))
            dispatch(setModalState(false))
        } else if (!modalData._id && router.query.id) {
            const session = {
                day: modalData.day ? modalData.day : modalData,
                topic,
                preacher: {
                    _id: preacher,
                    name: name
                },
                description,
                startTime,
                endTime,
                _id: id
            }

            dispatch(setEventSessions(session))
            dispatch(setModalState(false))
        } else {
            
            const session = {
                day: modalData.day ? modalData.day : modalData,
                topic,
                preacher,
                description,
                startTime,
                endTime,
                id
            }
            dispatch(setSessions(session))
            dispatch(setModalState(false))
        }
        
    }

    return (
        <div
            onClick={() => {dispatch(setModalState(false))}}
            className="fixed w-full h-screen  top-0 bottom-0 left-0 right-0 overflow-y-hidden overscroll-y-none bg-gray-900/90 z-50 ">

            <div
                onClick={(e) => e.stopPropagation()}
                className="flex w-full h-full justify-center items-center">
                <div className="flex flex-col space-y-5 max-w-screen-md mx-auto h-[500px] w-full !px-5 !py-5 relative rounded-2xl bg-white">
                    <h1 className="uppercase font-medium text-primary-dark text-center">{modalData.day ? modalData.day : modalData}</h1>
                    <form className="flex flex-col space-y-4 w-full items-center justify-start">
                        <div className="grid grid-cols-12 w-full items-center gap-3">
                            <div className="col-span-6 w-full space-y-2">
                                <label htmlFor="title" className="ml-2 text-sm uppercase">Topic</label>
                                <input
                                    type="title"
                                    name="title"
                                    className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                    required
                                    value={topic}
                                    onChange={(e) => { setTopic(e.target.value) }}
                                />
                            </div>
                            <div className="col-span-3 w-full space-y-2">
                                <label htmlFor="title" className="ml-2 text-sm uppercase">Starts</label>
                                <DatePicker
                                    selected={startTime}
                                    onChange={(date) => setStartTime(date)}
                                    className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                    timeInputLabel="Time:"
                                    dateFormat="MM/dd/yyyy h:mm aa"
                                    showTimeInput
                                />
                            </div>
                            <div className="col-span-3 w-full space-y-2">
                                <label htmlFor="title" className="ml-2 text-sm uppercase">Ends</label>
                                <DatePicker
                                    selected={endTime}
                                    onChange={(date) => setEndTime(date)}
                                    className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                    timeInputLabel="Time:"
                                    dateFormat="MM/dd/yyyy h:mm aa"
                                    showTimeInput
                                />
                            </div>
                        </div>
                        {/* preacher */}
                        <div className="space-y-2 w-full">
                            <label htmlFor="name" className="ml-2 text-sm uppercase">Preacher</label>
                            <select
                                type="text"
                                name="preacher"
                                className="w-full capitalize text-gray-500 !px-1 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                value={preacherName}
                                onChange={(e) => {
                                    setPreacherName(e.target.value)
                                }}
                            >
                                {
                                    ministers && [{ name: "select preacher", _id: 1 }, ...ministers].map(minister => (
                                        <option className="capitalize" key={minister._id} value={minister.name}>{minister.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        {/* description */}
                        <div className="w-full space-y-2">
                            <label htmlFor="description" className="ml-2 text-sm uppercase">description</label>
                            <textarea
                                className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                rows="4"
                                value={description}
                                onChange={(e) => { setDescription(e.target.value) }}
                            >
                            </textarea>
                        </div>
                    </form>
                    <div className="absolute bottom-2 left-0 right-0 flex  items-center justify-around w-full !mb-3 ">
                        <h1
                            onClick={() => { dispatch(setModalState(false)) }}
                            className="cursor-pointer text-center text-white py-1.5 rounded-md text-sm  px-7 uppercase bg-red-700">
                            cancel
                        </h1>
                        <button onClick={handleSubmit} className="text-center text-white py-1.5 rounded-md text-sm  px-7 uppercase bg-blue-600">
                            {
                                loading ? <ButtonLoader /> : modalData._id ? "upadte session" : "add session"
                            }
                            
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Modal
