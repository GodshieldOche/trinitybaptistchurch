import { useState, useEffect, } from 'react';
import Editor from '../../../../components/Editor';
import Quill from '../../../../components/Quill';
import dynamic from "next/dynamic";
import parse from 'html-react-parser';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const categories = [
  "select category",  "christian life", "church & ministry", "family", "history & biography", "theology", "worldview & culture"
]

const christianLife = [
    "christian thought", "life issues", "spiritual growth", 
]

const churchMinistry = [
    "trinity baptist church", "church leadership", "church life", "church practices", "outreach"
]

const family = [
    "children", "dating & singleness", "divorce and remarriage", "husband and fathers", "manhood & womanhood", "marriage", "men", "parenting", "wives and mothers", "women"
]

const historyBiography = [
    "auto biography", "church history"
]

const theology = [
    "bible studies", "general theology", "god", "jesus christ", "holy spirit", "salvation", "sin", 
]

const worldView = [
    "apologetics", "arts & literature", "ethics", "worldview"
]







const New = () => {
    const [topic, setTopic] = useState([])
    const [category, setCategory] = useState("")
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");
    const [startDate, setStartDate] = useState(new Date());


    useEffect(() => {
        setEditorLoaded(true);
    }, []);



    const handleTopic = (value) => {
        if(value === "christian life") {
            setTopic(christianLife)
        } else if (value === "church & ministry") {
            setTopic(churchMinistry)
        } else if (value === "family") {
            setTopic(family)
        } else if (value === "history & biography") {
            setTopic(historyBiography)
        } else if (value === "theology") {
            setTopic(theology)
        } else if (value === "worldview & culture") {
            setTopic(worldView)
        } else {
            setTopic([])
        }
    }



    return (
        <div className="flex  w-full h-full  py-2  px-2">
            <div className="w-full flex flex-col space-y-4 items-center h-full pt-5 px-3 rounded-2xl bg-white">
                <h1 className="uppercase text-lg text-primary-dark font-medium">New sermon</h1>
                <form className="w-full">
                    <div className="w-full h-full grid grid-cols-12 gap-5">
                        <div className="col-span-7 space-y-5 w-full text-gray-700 ">
                            {/* sermon title */}
                            <div className="space-y-2">
                                <label htmlFor="title" className="ml-2 text-sm uppercase">title</label>
                                <input
                                    type="title"
                                    name="title"
                                    className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                    required
                                // value={name}
                                // onChange={(e) => { setName(e.target.value) }}
                                />
                            </div>
                            {/* sermon category/topic */}
                            <div className="space-y-2">

                                <div className="flex space-x-2 w-full items-center">
                                    <div className="space-y-2 w-full">
                                        <label htmlFor="name" className="ml-2 text-sm uppercase">Category</label>
                                        <select
                                            type="text"
                                            name="category"
                                            className="w-full capitalize text-gray-500 !px-1 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                            value={category}
                                            onChange={(e) => {
                                                setCategory(e.target.value)
                                                handleTopic(e.target.value)
                                            }}
                                        >
                                            {
                                                categories.map(category => (
                                                    <option className="capitalize" key={category} value={category}>{category}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="space-y-2 w-full">
                                        <label htmlFor="name" className="ml-2 text-sm uppercase">Topic</label>
                                        <select
                                            type="text"
                                            name="category"
                                            className="w-full capitalize text-gray-500 !px-1 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                        >
                                            {
                                                topic.map(item => (
                                                    <option className="capitalize" key={item} value={item}>{item}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>

                            </div>

                            {/* Preacher */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="ml-2 text-sm uppercase">Preacher</label>
                                <select
                                    type="text"
                                    name="category"
                                    className="w-full capitalize text-gray-500 !px-1 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                // value={category}
                                // onChange={(e) => {
                                //     setCategory(e.target.value)
                                //     handleTopic(e.target.value)
                                // }}
                                >
                                    {
                                        ["select preacher", "abutu peter joshua", "eleazar maduka", "oche chidi"].map(preacher => (
                                            <option className="capitalize" key={preacher} value={preacher}>{preacher}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            {/* Date/scripture*/}
                            <div className="space-y-2">

                                <div className="flex space-x-2 w-full items-center">
                                    <div className="space-y-2 w-full">
                                        <label htmlFor="name" className="ml-2 text-sm uppercase">Scripture</label>
                                        <input
                                            type="text"
                                            name="scripture"
                                            className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                        />
                                    </div>
                                    <div className="space-y-2 w-full">
                                        <label htmlFor="name" className="ml-2 text-sm uppercase">Date</label>
                                        <DatePicker
                                            closeOnScroll={true}
                                            selected={startDate}
                                            className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                            onChange={(date) => setStartDate(date)}
                                        />
                                    </div>
                                </div>

                            </div>

                            {/* Description */}
                            <div className="w-full space-y-2">
                                <label htmlFor="description" className="ml-2 text-sm uppercase">description</label>
                                <Quill />
                            </div>
                        </div>
                        <div className="col-span-5 space-y-5 w-full text-gray-700 ">
                            {/* image upload */}
                            <div className="space-y-3 w-full">
                                <h1 className=" uppercase text-sm">Image</h1>
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 capitalize">Click to select</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">PNG or JPG </p>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </div>
                                </label>
                                <button className="text-center w-full py-2 text-white text-sm uppercase bg-violet-700 rounded-lg">Upload video</button>
                            </div>
                            {/* youtube video link */}
                            <div className="space-y-2 w-full">
                                <div className="space-y-2">
                                    <label htmlFor="title" className="ml-2 text-sm uppercase">Youtube video link</label>
                                    <input
                                        type="link"
                                        name="link"
                                        className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                        required
                                    // value={name}
                                    // onChange={(e) => { setName(e.target.value) }}
                                    />
                                </div>
                            </div>
                            {/* audio upload */}
                            <div className="space-y-3 w-full">
                                <h1 className="ml-2 text-sm uppercase">audio file</h1>
                                <input type="file" className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-gray-100 file:text-violet-700
                            hover:file:bg-violet-100
                            "/>
                                <button className="text-center w-full py-2 text-white text-sm uppercase bg-violet-700 rounded-lg">Upload audio</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full !mt-8 !mb-5">
                        <button className="text-center text-white py-1.5 rounded-md text-sm  px-7 uppercase bg-red-700">
                            cancel
                        </button>
                        <button className="text-center text-white py-1.5 rounded-md text-sm  px-7 uppercase bg-primary-light">
                            create
                        </button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default New
