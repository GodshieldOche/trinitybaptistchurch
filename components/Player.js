import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { useState } from 'react';
import Audio from './Audio';
import Video from './Video';

const Player = ({ resource }) => {

    const [isVideo, setIsVideo] = useState(false);
    
    return (
        <div className="bg-[#eee]/60 sm:!pt-24 !pt-[60px]  pb-5">
            <div className="max-w-screen-sm mx-auto ">
                <div className="flex flex-col justify-center items-center space-y-5">
                    <div className="flex w-full">
                        <Audio audioLink={resource.audioUrl} title={resource.title} isVideo={isVideo} />
                        <Video videoLink={resource.youtubeLink} isVideo={isVideo} />
                    </div>
                    
                    <div className="flex items-center justify-center w-full">
                        <div className="flex items-center">
                            <h1
                                onClick={() => setIsVideo(false)}
                                className={` ${isVideo ? "bg-none text-primary-dark" : "text-white bg-primary-dark"} uppercase text-sm  cursor-pointer py-1 px-10 border border-primary-dark `}>Audio</h1>
                            {
                                resource.youtubeLink &&
                                <h1
                                    onClick={() => setIsVideo(true)}
                                    className={` ${isVideo ? "text-white bg-primary-dark" : "bg-none text-primary-dark"} uppercase text-sm py-1 px-10 border cursor-pointer border-primary-dark `}>Video</h1>
                            }
                                
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full ">
                        <a href={resource.audioUrl} download="he turned it">
                            <div className="flex items-center cursor-pointer space-x-1">
                                    <h1 className="uppercase text-sm">Download</h1>
                                    <CloudDownloadIcon className="!text-xl" /> 
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player
