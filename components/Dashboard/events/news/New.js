import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect, } from 'react';
import Editor from "../../../Editor"

const New = () => {
    const [image, setImage] = useState('')
    const [imagePreview, setImagePreview] = useState('')
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");

    useEffect(() => {
        setEditorLoaded(true);
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
                <h1 className="uppercase text-lg text-primary-dark font-medium">Add News</h1>
                <form className="w-full flex flex-col space-y-4" autoComplete="off">
                    <div className="w-full h-full grid grid-cols-12 items-center gap-5">
                        <div className="col-span-7 space-y-5 w-full text-gray-700 ">
                            {/* Title */}
                            <div className="space-y-2">
                                <label htmlFor="title" className="ml-2 text-sm uppercase">{`News title`}</label>
                                <input
                                    type="title"
                                    name="title"
                                    className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                    required
                                // value={name}
                                // onChange={(e) => { setName(e.target.value) }}
                                />
                            </div>
                            {/* select Action */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="ml-2 text-sm uppercase">Call to action</label>
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
                                        ["select call to action", "give"].map(action => (
                                            <option className="capitalize" key={action} value={action}>{action}</option>
                                        ))
                                    }
                                </select>
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
                        </div>
                    </div>
                    <div className="flex flex-col w-full space-y-3">
                        <h1 className="ml-2 text-sm uppercase">
                            Body
                        </h1>
                        <Editor name="description"
                            onChange={(data) => {
                                setData(data);
                            }}
                            editorLoaded={editorLoaded}/>
                    </div>
                    <div className="flex items-center justify-between w-full !mt-5 mb-3">
                        <h1
                            onClick={() => { router.back() }}
                            className="cursor-pointer text-center text-white py-1.5 rounded-md text-sm  px-7 uppercase bg-red-700">
                            cancel
                        </h1>
                        <button className="text-center text-white py-1.5 rounded-md text-sm  px-7 uppercase bg-blue-600">
                            add 
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default New
