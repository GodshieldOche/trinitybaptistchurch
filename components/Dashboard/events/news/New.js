import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect, } from 'react';
import Editor from "../../../Editor"
import { toast } from 'react-toastify'
import ImageUploader from '../../../common/ImageUploader'
import { useDispatch } from 'react-redux';
import { postAddNews } from '../../../../redux/features/addNews';
import ButtonLoader from '../../../common/ButtonLoader';
import { getNewsDetails, updateNews } from '../../../../redux/features/newsDetails';
 
const New = ({name}) => {
    const [imageUrl, setImageUrl] = useState('')
    const [imagePreview, setImagePreview] = useState('')
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");
    const [title, setTitle] = useState("");
    const [action, setAction] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const dispatch = useDispatch();
    const { id } = router.query;

    useEffect(() => {
        setEditorLoaded(true);
        if (name === "update news") {
            dispatch(getNewsDetails(id)).then(res => {
                if (!res.error) {
                    const { title, action, body, imageUrl } = res.payload.news;
                    setTitle(title);
                    setAction(action);
                    setData(body);
                    setImageUrl(imageUrl);
                    setImagePreview(imageUrl.url);
                }
            })
        }
    }, []);

    

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        if (title && action && data && imageUrl) {
            name === "add news" &&
                dispatch(postAddNews({ body: data, title, action, imageUrl })).then(res => {
                if (!res.error) {
                    setLoading(false)
                    toast.success("News Added Successfully")
                    router.back()
                } else {
                    setLoading(false)
                    console.log(res.error)
                } 
            })

            name === "update news" &&
                dispatch(updateNews({ id, body: data, title, action, imageUrl })).then(res => { 
                    if (!res.error) {
                        setLoading(false)
                        toast.success("News Updated Successfully")
                        router.back()
                    } else {
                        setLoading(false)
                        console.log(res.error)
                    } 
                })
        } else {
            toast.info('Please fill all the fields')
        }
    }



    return (
        <div className="flex  w-full min-h-screen  my-2  mx-2 rounded-2xl bg-white">
            <div className="w-full flex flex-col space-y-7 h-fit items-center  pt-5 px-3">
                <h1 className="uppercase text-lg text-primary-dark font-medium">{name}</h1>
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
                                    value={title}
                                    onChange={(e) => { setTitle(e.target.value) }}
                                />
                            </div>
                            {/* select Action */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="ml-2 text-sm uppercase">Call to action</label>
                                <select
                                    type="text"
                                    name="category"
                                    className="w-full capitalize text-gray-500 !px-1 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                    value={action}
                                    onChange={(e) => {
                                        setAction(e.target.value)
                                    }}
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
                            <ImageUploader imagePreview={imagePreview} setImagePreview={setImagePreview} setImageUrl={setImageUrl} imageUrl={imageUrl} height={"h-44"} />
                        </div>
                    </div>

                    <div className="flex flex-col w-full space-y-3">
                        <h1 className="ml-2 text-sm uppercase"> Body</h1>
                        <Editor
                            name="description"
                            onChange={(data) => {setData(data) }}
                            editorLoaded={editorLoaded}
                            value={data}
                        />
                    </div>
                    <div className="flex items-center justify-between w-full !mt-5 mb-3">
                        <h1
                            onClick={() => { router.back() }}
                            className="cursor-pointer text-center text-white py-1.5 rounded-md text-sm  px-7 uppercase bg-red-700">
                            cancel
                        </h1>
                        <button onClick={handleSubmit} className="text-center text-white py-1.5 rounded-md text-sm  px-7 uppercase bg-blue-600">
                            {
                                loading ? <ButtonLoader /> : name === "update news" ? "update" : "add"
                           }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default New
