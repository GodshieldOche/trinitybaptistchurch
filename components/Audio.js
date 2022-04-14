import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Slider from '@mui/material/Slider';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';



const Audio = () => {

    const [position, setPosition] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const audioPlayer = useRef()

    useEffect(() => {
        audioPlayer.current.addEventListener('timeupdate', () => {
            setPosition(prev => prev = audioPlayer.current.currentTime);
            setCurrentTime(prev => prev = Math.floor(audioPlayer.current.currentTime));
        });
        audioPlayer.current.addEventListener('loadedmetadata', () => {
            setDuration(prev => prev = Math.floor(audioPlayer.current.duration));
        })

    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

    useEffect(() => {
        if (currentTime == duration) {
            handlePlay();
            audioPlayer.current.currentTime = 0
            setPosition(0)

        }
    }, [currentTime, duration]);

    const calculateTime = (sec) => {
        let min = Math.floor(sec / 60);
        let secs = sec % 60;
        return `${min < 10 ? '0' : ''}${min}:${secs < 10 ? '0' : ''}${secs}`;
    }

    const handlePlay = () => {
        setIsPlaying(!isPlaying);

        if (isPlaying) {
            audioPlayer.current.pause();
        } else {
            audioPlayer.current.play();
        }
    }

    const back = () => {
        const back = audioPlayer.current.currentTime - 15;
        audioPlayer.current.currentTime = back;
        setPosition(back);
    }

    const forward = () => {
        const forward = audioPlayer.current.currentTime + 15;
        audioPlayer.current.currentTime = forward;
        setPosition(forward)
    }



    return (
        <div className="w-full h-[300px] md:h-[350px] relative text-white/90 bg-black flex items-center justify-center">
            <div className="flex  items-center justify-center w-[200px] h-[150px] md:w-[250px] md:h-[150px]  bg-primary-dark">
                <h1 className="text-center  uppercase font-medium px-1 text-lg md:text-2xl">The King Who Restores The Sinner</h1>
            </div>
            <audio ref={audioPlayer} src="https://awss30258.s3.amazonaws.com/next-s3-uploads/11+He+Turned+It.m4a"></audio>
            <div className="absolute w-full max-w-lg mx-auto flex items-center justify-between px-3 md:px-0">
                <button
                    onClick={() => back()}
                    className="flex items-center text-gray-300 space-x-1 outline-none">
                    <ArrowBackIcon className="  cursor-pointer !text-2xl" />
                    <h1 className="text-xs">15s</h1>
                </button>

                <div>
                    {
                        isPlaying ?
                            <PauseCircleOutlineIcon
                                onClick={handlePlay}
                                className="  cursor-pointer text-gray-600/70 md:text-gray-700/70  !text-6xl" />
                            :
                            <PlayCircleOutlineIcon
                                onClick={handlePlay}
                                className="  cursor-pointer text-gray-600/70 md:text-gray-700/70  !text-6xl" />
                    }
                </div>
                <button
                    onClick={() => forward()}
                    className="flex items-center text-gray-300 space-x-1 outline-none">
                    <h1 className="text-xs">15s</h1>
                    <ArrowForwardIcon className="  cursor-pointer  !text-2xl" />
                </button>

            </div>

            <div className="absolute bottom-3 md:bottom-5 px-2 md:px-0 max-w-lg flex w-full items-center space-x-2 md:space-x-4">
                <div className="flex !items-center w-full space-x-4 ">
                    <h1 className="text-xs font-light">{calculateTime(currentTime)}</h1>
                    <Slider
                        aria-label="time-indicator"
                        value={position}
                        min={0}
                        step={1}
                        max={duration}
                        className="!text-gray-300"
                        onChange={(_, value) => {
                            setPosition(value)
                            audioPlayer.current.currentTime = value;
                        }}
                    />
                    <h1 className="text-xs font-light">{calculateTime(duration)}</h1>
                </div>

            </div>
        </div>
    )
}

export default Audio
