import { useState } from "react";
import { useS3Upload } from "next-s3-upload";
import ButtonLoader from "./ButtonLoader"

const AudioUploader = ({ audioUrl, setAudioUrl }) => {
    const [loading, setLoading] = useState(false);
    const [audio, setAudio] = useState();
    const { uploadToS3, files } = useS3Upload();

    const handleFileChange = async event => {
        event.preventDefault();
        if (audio) {
            setLoading(true)
            const { url } = await uploadToS3(audio);

            setAudioUrl(url);
            console.log(url);
            setLoading(false)
        }  
    };


    return (
        <div className="space-y-4 w-full">
            <h1 className="ml-2 text-sm uppercase">audio file</h1>
            <input
                onChange={(e) => {
                    setAudio(e.target.files[0])
                    setAudioUrl('')
                    }}
                type="file" className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-gray-100 file:text-violet-700
                            hover:file:bg-violet-100
                            "/>
            <button
                onClick={handleFileChange}
                disabled={audioUrl}
                className=" disabled:bg-gray-500 text-center w-full py-2 text-white text-sm uppercase bg-violet-700 rounded-lg">
                {
                   audioUrl ?  "uploaded" : loading ?
                        <div className="flex w-full items-center space-x-2 justify-center">
                            <ButtonLoader />
                            {
                                files.map((file, index) => {
                                    return (
                                        <h1 className="uppercase" key={index}>
                                            {index === 0 && Math.floor(file.progress) + "%"}
                                        </h1>
                                    )
                                })
                            }
                        </div>
                        : "Upload audio"
                }
            </button>
        </div>
    )
}

export default AudioUploader
