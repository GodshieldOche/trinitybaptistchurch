import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Audio from './Audio';

const Player = () => {
    
    return (
        <div className="bg-[#eee]/60 sm:!pt-24 !pt-[60px]  pb-5">
            <div className="max-w-screen-sm mx-auto ">
                <div className="flex flex-col justify-center items-center space-y-5">
                    <Audio />
                    <div className="flex items-center justify-center w-full">
                        <div className="flex items-center">
                            <h1 className="uppercase text-sm text-white bg-primary-dark cursor-pointer py-1 px-10 border border-primary-dark ">Audio</h1>
                            <h1 className="uppercase text-sm py-1 px-10 border cursor-pointer border-primary-dark ">Video</h1>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full cursor-pointer space-x-1">
                        <h1 className="uppercase text-sm">Download</h1>
                        <CloudDownloadIcon className="!text-xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player
