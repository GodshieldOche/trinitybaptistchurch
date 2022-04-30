import { useState, useEffect, } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const New = () => {
    const [image, setImage] = useState('')
    const [imagePreview, setImagePreview] = useState('')

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
                <h1 className="uppercase text-lg text-primary-dark font-medium">Add minister</h1>
                <form className="w-full space-y-5 " autoComplete="off">
                    <div className="w-full h-full grid grid-cols-12 items-center gap-5">
                        <div className="col-span-7 space-y-5 w-full text-gray-700 ">
                            <div className="grid grid-cols-12  w-full items-center gap-2">
                                <div className="col-span-8 space-y-2">
                                    <label htmlFor="title" className="ml-2 text-sm uppercase">Name</label>
                                    <input
                                        type="title"
                                        name="title"
                                        className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                        required
                                    // value={name}
                                    // onChange={(e) => { setName(e.target.value) }}
                                    />
                                </div>
                                <div className="col-span-4 space-y-2">
                                    <label htmlFor="title" className="ml-2 text-sm uppercase">Role</label>
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
                            <div className="w-full space-y-2">
                                <label htmlFor="description" className="ml-2 text-sm uppercase">About</label>
                                <textarea
                                    className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                    rows="8"
                                // value={description}
                                // onChange={(e) => { setDescription(e.target.value) }}
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className="col-span-5 space-y-5 w-full text-gray-700 ">
                            <div className="space-y-4 w-full">
                                <h1 className=" uppercase text-sm">Image</h1>
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
                                    htmlFor="dropzone-file" className={` h-52 relative flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100`}>
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
                    <div className="flex items-center justify-between w-full !mt-10 !mb-3">
                        <h1
                            onClick={() => { router.back() }}
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
