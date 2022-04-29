import { useState, useEffect, } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from 'next/image';
import { useRouter } from 'next/router';


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







const New = ({name}) => {
    const [topic, setTopic] = useState([])
    const [category, setCategory] = useState("")
    const [startDate, setStartDate] = useState(new Date());
    const [image, setImage] = useState('')
    const [imagePreview, setImagePreview] = useState('')


    useEffect(() => {

    }, []);

    const router = useRouter();




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
            <div className="w-full flex flex-col h-fit space-y-4 items-center  pt-5 px-3 ">
                <h1 className="uppercase text-lg text-primary-dark font-medium">{`new ${name} `}</h1>
                <form className="w-full space-y-8">
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
                            
                            {
                                name === "bible study"
                                ?
                                    <div className="space-y-2">
                                    <label htmlFor="topic" className="ml-2 text-sm uppercase">Study Topic</label>
                                    <input
                                        type="topic"
                                        name="topic"
                                        className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                        required
                                    // value={name}
                                    // onChange={(e) => { setName(e.target.value) }}
                                    />
                                </div>
                                :
                                    < div className="space-y-2">
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
                            }

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
                                <textarea
                                    className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                    rows="4"
                                // value={description}
                                // onChange={(e) => { setDescription(e.target.value) }}
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className="col-span-5 space-y-5 w-full text-gray-700 ">
                            {/* image upload */}
                            <div className="space-y-3 w-full">
                                <h1 className=" uppercase text-sm">Image <span className="capitalize text-primary-dark text-xs font-light">(optional)</span></h1>
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
                                    htmlFor="dropzone-file" className="relative flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
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
                            {/* youtube video link */}
                            <div className="space-y-2 w-full">
                                <div className="space-y-2">
                                    <label htmlFor="title" className="ml-2 text-sm uppercase">
                                        Youtube video link <span className="capitalize text-primary-dark text-xs font-light">(optional)</span>
                                    </label>
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
                            <div className="space-y-4 w-full">
                                <h1 className="ml-2 text-sm uppercase">audio file</h1>
                                <input type="file" className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-gray-100 file:text-violet-700
                            hover:file:bg-violet-100
                            "/>
                                <h1 className="cursor-pointer text-center w-full py-2 text-white text-sm uppercase bg-violet-700 rounded-lg">Upload audio</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full !mt-5 mb-3">
                        <h1
                            onClick={() => {router.back()}}
                            className="cursor-pointer text-center text-white py-1.5 rounded-md text-sm  px-7 uppercase bg-red-700">
                            cancel
                        </h1>
                        <button className="text-center text-white py-1.5 rounded-md text-sm  px-7 uppercase bg-blue-600">
                            create
                        </button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default New
