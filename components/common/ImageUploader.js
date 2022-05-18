import { useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import ButtonLoader from './ButtonLoader'
import blur from './blur'

const ImageUploader = ({
    setImageUrl,
    imageUrl,
    imagePreview,
    setImagePreview,
    height,
}) => {

    const [imageLoader, setImageLoader] = useState(false)
    const [image, setImage] = useState('')
    

    const onChange = (e) => {
        setImageUrl()
        setImage(e.target.files[0])
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImagePreview(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const onDrop = (e) => {
        setImageUrl()
        const droppedFile = Array.from(e.dataTransfer.files);
        setImage(droppedFile[0])
        setImagePreview(URL.createObjectURL(droppedFile[0]));
    }

    const uploadImage = async (e) => {
        e.preventDefault()
        if (image) {
            try {
                setImageLoader(true)
                const data = new FormData()
                data.append("file", image)
                data.append("upload_preset", "codexx")
                data.append("cloud_name", "dk6uhtgvo")
                const res = await axios.post("https://api.cloudinary.com/v1_1/dk6uhtgvo/image/upload", data)
                const {url, public_id} = res.data
                setImageUrl({ public_id, url,})
                setImageLoader(false)
            } catch (err) {
                console.log(err)
            }
        }
    }
    return (
        <div className="space-y-3 w-full">
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
                htmlFor="dropzone-file" className={` ${height} relative flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100`}>
                {
                    imagePreview ?
                        <Image src={imagePreview} className="object-cover w-1/2 h-1/2 "
                            layout="fill"
                            blurDataURL={blur}
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
            <button onClick={uploadImage} disabled={imageUrl} className="text-center w-full py-2 text-white text-sm uppercase disabled:bg-gray-500 bg-violet-700 rounded-lg">
                {
                    imageUrl ? "uploaded" : imageLoader ? <ButtonLoader /> : "Upload Image"
                }
            </button>
        </div>

    )
}

export default ImageUploader
