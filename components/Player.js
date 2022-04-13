import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const Player = () => {
    return (
        <div className="bg-[#eee]/60 sm:!pt-24 !pt-[60px]  pb-5">
            <div className="max-w-screen-sm mx-auto ">
                <div className="flex flex-col justify-center items-center space-y-5">
                    <div className="w-full h-[300px] md:h-[350px] relative text-white/90 bg-black flex items-center justify-center">
                        <div className="flex  items-center justify-center w-[200px] h-[150px] md:w-[250px] md:h-[150px]  bg-primary-dark">
                            <h1 className="text-center  uppercase font-medium px-1 text-lg md:text-2xl">The King Who Restores The Sinner</h1>
                        </div>
                        <PlayCircleOutlineIcon className=" absolute cursor-pointer text-gray-700/70  text-6xl" />
                        <div className="absolute bottom-3 md:bottom-5 px-2 md:px-0 max-w-lg flex w-full items-center space-x-2 md:space-x-4">
                            <div className="flex !items-center w-full space-x-1 ">
                                <h1 className="text-xs font-light">0:00</h1>
                                <div className="w-full h-3 cursor-pointer md:h-4 border">
                                </div>
                                <h1 className="text-xs font-light">53:37</h1>
                            </div>

                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full">
                        <div className="flex items-center">
                            <h1 className="uppercase text-sm text-white bg-primary-dark cursor-pointer py-1 px-10 border border-primary-dark ">Audio</h1>
                            <h1 className="uppercase text-sm py-1 px-10 border cursor-pointer border-primary-dark ">Video</h1>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full cursor-pointer space-x-1">
                        <h1 className="uppercase text-sm">Download</h1>
                        <CloudDownloadIcon className="text-xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player
