import { useState, useEffect, } from 'react';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ImageUploader from '../../../common/ImageUploader';
import { postAddSeries } from '../../../../redux/features/addSeries'
import ButtonLoader from '../../../common/ButtonLoader';
import { postAddConference } from '../../../../redux/features/addConference'



const lists = []


const New = ({ name }) => {
    const [imageUrl, setImageUrl] = useState('')
    const [imagePreview, setImagePreview] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        
    }, []);

    const router = useRouter();
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === 'series') {
            if (title, description, imageUrl) {
                setLoading(true)
                dispatch(postAddSeries({ title, description, imageUrl })).then(result => {
                    if (!result.error) {
                        setLoading(false)
                        toast.success('Series Created Successfully')
                        router.back()
                    } else {
                        setLoading(false)
                        console.log(result.error)
                    }
                })
            } else {
                toast.info('Please fill all the required fields')
            }
        }

        if (name === 'conference') {
            if (title, description, imageUrl, startDate, endDate) { 
                setLoading(true)
                dispatch(postAddConference({ title, description, imageUrl, startDate, endDate })).then(result => {
                    if (!result.error) {
                        setLoading(false)
                        toast.success('Conference Created Successfully')
                        router.back()
                    } else {
                        setLoading(false)
                        console.log(result.error)
                    }
                })
            } else {
                toast.info('Please fill all the required fields')
            }
        }
        
        
    }


    

    return (
        <div className="flex  w-full min-h-screen  my-2  mx-2 rounded-2xl bg-white">
            <div className="w-full flex flex-col space-y-7  h-fit items-center  pt-5 px-3">
                <h1 className="uppercase text-lg text-primary-dark font-medium">{`create New ${name}`}</h1>
                <form className="w-full" autoComplete="off">
                    <div className="w-full h-full grid grid-cols-12 items-center gap-5">
                        <div className="col-span-7 space-y-5 w-full text-gray-700 ">
                            {/* title */}
                            <div className="space-y-2">
                                <label htmlFor="title" className="ml-2 text-sm uppercase">{`${name} title`}</label>
                                <input
                                    type="title"
                                    name="title"
                                    className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                    required
                                    value={title}
                                    onChange={(e) => { setTitle(e.target.value.toLowerCase()) }}
                                />
                            </div>
                            {/* Description */}
                            <div className="w-full space-y-2">
                                <label htmlFor="description" className="ml-2 text-sm uppercase">{`${name} description`}</label>
                                <textarea
                                    className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                    rows={`${name === "series" ? "8" : "10"}`}
                                    value={description}
                                    onChange={(e) => { setDescription(e.target.value.toLowerCase()) }}
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className="col-span-5 space-y-5 w-full text-gray-700 ">
                            {/* date pickker */}
                            {
                                name === "conference"
                                &&
                                <div className="space-y-2 w-full">
                                    <label htmlFor="name" className="ml-2 text-sm uppercase">Conference Date</label>
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
                                        }}
                                        isClearable={true}
                                    />
                                </div>
                            }
                            
                            {/* image upload */}
                            <ImageUploader imagePreview={imagePreview} setImagePreview={setImagePreview} setImageUrl={setImageUrl} imageUrl={imageUrl} height={"h-52"} />
                        </div>
                    </div>
                </form>
                <div className="flex items-center justify-between w-full !mb-3">
                    <h1
                        onClick={() => { router.back() }}
                        className="cursor-pointer text-center text-white py-1.5 rounded-md text-sm  px-7 uppercase bg-red-700">
                        cancel
                    </h1>
                    <button onClick={handleSubmit} className="text-center text-white py-1.5 rounded-md text-sm  px-7 uppercase bg-blue-600">
                        {
                            loading ? <ButtonLoader /> : "create"
                        }
                    </button>
                </div>

            </div>
        </div>
    )
}

export default New
