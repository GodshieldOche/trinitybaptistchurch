import { useState, useEffect, } from 'react';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux"
import { setModalState } from '../../../../redux/features/menu';

const lists = [1]

const New = () => {
    const [image, setImage] = useState('')
    const [imagePreview, setImagePreview] = useState('')
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const dispatch = useDispatch()

    useEffect(() => {

    }, []);

    const router = useRouter();


    const onChange = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result)
                setImagePreview(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const onDrop = (e) => {
        const droppedFile = Array.from(e.dataTransfer.files);
        setImage(droppedFile[0]);
        setImagePreview(URL.createObjectURL(droppedFile[0]));
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
                                    // value={name}
                                    // onChange={(e) => { setName(e.target.value) }}
                                    />
                                </div>
                                <div className="col-span-7 space-y-2">
                                    <label htmlFor="title" className="ml-2 text-sm uppercase">Event title</label>
                                    <input
                                        type="title"
                                        name="title"
                                        className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                        required
                                    // value={name}
                                    // onChange={(e) => { setName(e.target.value) }}
                                    />
                                </div>
                            </div>
                            
                            {/* Description */}
                            <div className="w-full space-y-2">
                                <label htmlFor="description" className="ml-2 text-sm uppercase">event description</label>
                                <textarea
                                    className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                    rows= "10"
                                // value={description}
                                // onChange={(e) => { setDescription(e.target.value) }}
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
                                    startDate={startDate}
                                    endDate={endDate}
                                    className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                    onChange={(update) => {
                                        setDateRange(update);
                                    }}
                                    isClearable={true}
                                />
                            </div>

                            {/* image upload */}
                            <div className="space-y-4 w-full">
                                <h1 className=" uppercase text-sm">Event Image</h1>
                                <label
                                    onDragOver={e => {
                                        e.preventDefault();
                                    }}
                                    onDragLeave={e => {
                                        e.preventDefault();
                                    }}
                                    onDrop={e => {
                                        e.preventDefault();
                                        onDrop(e)
                                    }}
                                    htmlFor="dropzone-file" className={`h-44 relative flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100`}>
                                    {
                                        imagePreview ?
                                            <Image src={imagePreview} className="object-cover w-1/2 h-1/2 "
                                                layout="fill"
                                                blurDataURL="data:..."
                                                placeholder="blur"
                                                alt="preview" />
                                            :
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-medium capitalize">Drag 'n' Drop</p>
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 capitalize">or Click to select</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">PNG or JPG </p>
                                            </div>
                                    }
                                    <input onChange={onChange} id="dropzone-file" type="file" className="hidden" />
                                </label>
                                <h1 className="text-center cursor-pointer w-full py-2 text-white text-sm uppercase bg-violet-700 rounded-lg">Upload Image</h1>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="w-full flex items-center space-x-4 ">
                    <h1 className="text-sm uppercase">Number of Days: <span className="font-medium">0</span></h1>
                    <select
                        type="text"
                        name="day"
                        className="capitalize text-gray-500 !px-3 py-1 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                    // value={category}
                    // onChange={(e) => {
                    //     setCategory(e.target.value)
                    //     handleTopic(e.target.value)
                    // }}
                    >
                        {
                            ["select day", "day 1", "day 2"].map(day => (
                                <option className="capitalize" key={day} value={day}>{day}</option>
                            ))
                        }
                    </select>
                    <h1
                        onClick={() => { dispatch(setModalState(true)) }}
                        className="uppercase cursor-pointer text-xs rounded bg-primary-light text-white  py-1 px-3">Add schedule</h1>
                </div>
                <div className="w-full flex flex-col space-y-7 items-center justify-center">
                    <h1 className="uppercase text-lg font-medium">{`Event Scheldule`}</h1>
                    {/* <div className="w-full flex items-center justify-between px-3">
                        <h1 className="uppercase text-lg font-medium">{`Event sermons`}</h1>
                        <h1
                            onClick={() => {
                                // if (name === "series") {
                                //     router.push('/admin/resources/series/sermon')
                                // } else {
                                //     router.push('/admin/resources/conference/sermon')
                                // }
                            }}
                            className="uppercase cursor-pointer text-sm text-white rounded-md py-2 px-4 bg-primary-dark">Add sermon</h1>
                    </div> */}
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
                                lists.map((item, index) => (
                                    <tr key={item} className={` transition duration-300 ease-in-out border-b border-b-gray-200`}>

                                        <td className="px-4 py-4 whitespace-nowrap text-sm  ">
                                            <h1>{index + 1}</h1>
                                        </td>
                                        <td className="text-sm  px-3 py-4 whitespace-nowrap ">
                                            <div className="flex flex-col space-y-2">
                                                <h1>8:00AM-10:00AM</h1>
                                            </div>
                                        </td>
                                        <td className="text-sm  px-3 py-4 whitespace-nowrap ">
                                            <h1 className="capitalize">Sovereingty of God defined</h1>
                                        </td>
                                        <td className="text-sm  px-3 py-4 whitespace-nowrap ">
                                            <h1>Damilare Sobanjo</h1>
                                        </td>
                                        <td className="text-sm  px-3 py-4 whitespace-nowrap ">
                                            <div className="flex flex-col space-y-2">
                                                <h1>Day 1</h1>
                                            </div>
                                        </td>
                                        <td className="text-sm  font-light px-3 py-4 whitespace-nowrap">
                                            <div className="flex space-x-2 items-center">
                                                <div className="flex justify-center items-center cursor-pointer hover:bg-primary-dark bg-primary-dark/90 w-7 h-7 rounded-full">
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
                    <button className="text-center text-white py-1.5 rounded-md text-sm  px-7 uppercase bg-blue-600">
                        create
                    </button>
                </div>

            </div>
        </div>
    )
}

export default New
