import { useState, useEffect, } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ImageUploader from '../../../common/ImageUploader';
import AudioUploader from '../../../common/AudioUploader';
import { useDispatch } from 'react-redux'
import { postCreateService } from '../../../../redux/features/addService'
import { toast } from 'react-toastify'
import ButtonLoader from '../../../common/ButtonLoader'


const New = () => {
    const [imageUrl, setImageUrl] = useState('')
    const [imagePreview, setImagePreview] = useState('')
    const [service, setService] = useState('')
    const [topic, setTopic] = useState('')
    const [audioUrl, setAudioUrl] = useState();
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [loading, setLoading] = useState(false)

    const router = useRouter();
    const dispatch = useDispatch()

    useEffect(() => {

    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (endTime && startTime && topic &&  imageUrl && service) {
            setLoading(true)
            dispatch(postCreateService({ service, endTime, startTime, topic, imageUrl, bulletin: audioUrl })).then(result => {
                if (!result.error) {
                    setLoading(false)
                    toast.success('Service Created Successfully')
                    router.back()
                } else {
                    setLoading(false)
                    console.log(result.error)
                }
            })
        } else {
            toast.info('Please fill all the fields')
        }
    }

    return (
        <div className="flex  w-full min-h-screen  my-2  mx-2 rounded-2xl bg-white">
            <div className="w-full flex flex-col space-y-7 h-fit items-center  pt-5 px-3">
                <h1 className="uppercase text-lg text-primary-dark font-medium">Add Service</h1>
                <form className="w-full space-y-5" autoComplete="off">
                    <div className="w-full h-full grid grid-cols-12 items-center gap-5">
                        <div className="col-span-7 space-y-5 w-full text-gray-700 ">
                            <div className="w-full space-y-2">
                                <label htmlFor="service" className="ml-2 text-sm uppercase">Service</label>
                                <input
                                    type="text"
                                    name="service"
                                    className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                    required
                                    value={service}
                                    onChange={(e) => { setService(e.target.value) }}
                                />
                            </div>
                            <div className="w-full space-y-2">
                                <label htmlFor="topic" className="ml-2 text-sm uppercase">Topic</label>
                                <input
                                    type="text"
                                    name="topic"
                                    className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                    required
                                    value={topic}
                                    onChange={(e) => { setTopic(e.target.value) }}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-2 w-full">
                                <div className="w-full space-y-2">
                                    <label htmlFor="title" className="ml-2 text-sm uppercase">Start Time</label>
                                    <DatePicker
                                        selected={startTime}
                                        onChange={(date) => setStartTime(date)}
                                        className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                        timeInputLabel="Time:"
                                        dateFormat="MM/dd/yyyy h:mm aa"
                                        showTimeInput
                                    />
                                </div>
                                <div className="w-full space-y-2">
                                    <label htmlFor="title" className="ml-2 text-sm uppercase">End Time</label>
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
                        </div>
                        <div className="col-span-5 space-y-5 w-full text-gray-700 ">
                            <ImageUploader imagePreview={imagePreview} setImagePreview={setImagePreview} setImageUrl={setImageUrl} imageUrl={imageUrl} height={"h-44"} />
                            <AudioUploader audioUrl={audioUrl} setAudioUrl={setAudioUrl} name="bulletin" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full !mt-10 !mb-3">
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
                </form>
            </div> 
        </div>
    )
}

export default New
