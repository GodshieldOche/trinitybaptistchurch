import { useState, useEffect, } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import ImageUploader from '../../common/ImageUploader';
import BeatLoader from "react-spinners/BeatLoader";
import { getMinisterDetails, updateMinister } from '../../../redux/features/getMinister';



const Details = () => {
    const [imageUrl, setImageUrl] = useState('')
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [about, setAbout] = useState('')
    const [imagePreview, setImagePreview] = useState('')
    const [loading, setLoading] = useState(false)

    const { loading:minsterLoader } = useSelector(state => state.minister)
    const dispatch = useDispatch()
    const router = useRouter();

    const { id } = router.query;


    useEffect(() => {
        dispatch(getMinisterDetails(id)).then((result) => {
            if (!result.error) {
                console.log(result)
                const { name, role, about, imageUrl } = result.payload.minister
                setName(name)
                setRole(role)
                setAbout(about)
                setImageUrl(imageUrl)
                setImagePreview(imageUrl.url)
            } else {
                console.log(result.error)
            }
        })
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        dispatch(updateMinister({ id, name, role, imageUrl, about })).then(result => {
            if (!result.error) {
                setLoading(false)
                toast.success("Minister updated Successfully")
                router.push("/admin/ministers")
            } else {
                console.log(result.error)
            }
        })
       


    }

    


    return (
        <div className="flex  w-full min-h-screen  my-2  mx-2 rounded-2xl bg-white">
            <div className="w-full flex flex-col space-y-7 h-fit items-center  pt-5 px-3">
                <h1 className="uppercase text-lg text-primary-dark font-medium">Edit minister</h1>
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
                                        value={name}
                                        onChange={(e) => { setName(e.target.value) }}
                                    />
                                </div>
                                <div className="col-span-4 space-y-2">
                                    <label htmlFor="title" className="ml-2 text-sm uppercase">Role</label>
                                    <input
                                        type="title"
                                        name="title"
                                        className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                        required
                                        value={role}
                                        onChange={(e) => { setRole(e.target.value) }}
                                    />
                                </div>
                            </div>
                            <div className="w-full space-y-2">
                                <label htmlFor="description" className="ml-2 text-sm uppercase">About</label>
                                <textarea
                                    className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                    rows="8"
                                    value={about}
                                    onChange={(e) => { setAbout(e.target.value) }}
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className="col-span-5 space-y-5 w-full text-gray-700 ">
                            <ImageUploader setImageUrl={setImageUrl} imagePreview={imagePreview} setImagePreview={setImagePreview} imageUrl={imageUrl} height={"h-52"} />
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
                                loading ? <BeatLoader color="#ffffff" loading={loading} size={10} /> : "update"
                            }
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Details
