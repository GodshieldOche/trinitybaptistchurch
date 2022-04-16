import { useEffect } from "react"
import { useState } from "react"
import Player from "../Player"
import Body from "../series/Body"


const series = [

    {
        title: "The Sovereignty of God defined",
        preacher: "Eleazar maduka",
        scripture: "jeremiah 28:1-17",
        videoLink: "https://www.youtube.com/embed/hJudFmrzHVQ",
        audioLink: "https://awss30258.s3.amazonaws.com/next-s3-uploads/The_King_Who_Restores_the_Sinner__Mark_140-217__Pastor_Joshua_Bolaji(128k).m4a",
        id: 1
    },
    {
        title: "The Sovereignty of God in salvation",
        preacher: "peter abutu joshua",
        scripture: "Deutronomy 4:1-20",
        videoLink: "https://www.youtube.com/embed/i-5D6sM0fJU",
        audioLink: "https://awss30258.s3.amazonaws.com/next-s3-uploads/%236+CANONICITY.mp3",
        id: 2
    },
    {
        title: "The Sovereignty of God in sanctification",
        preacher: "peter abutu joshua",
        scripture: "Deutronomy 8:2",
        videoLink: "https://www.youtube.com/embed/_mOoY4Icnq8",
        audioLink: "https://awss30258.s3.amazonaws.com/next-s3-uploads/11+He+Turned+It.m4a",
        id: 3
    },
    {
        title: "The Sovereignty of God in suffering",
        preacher: "peter abutu joshua",
        scripture: "Deutronomy 8:2",
        videoLink: "https://www.youtube.com/embed/2hhSos41ms0",
        audioLink: "https://awss30258.s3.amazonaws.com/next-s3-uploads/725a6702-3f66-4c7e-85b0-06bb0f995ff0/Turn_Your_Eyes_Reprise_%5BLive%5D(128k).mp3",
        id: 3
    },
    {
        title: "Ouestion and Answer session",
        preacher: "peter abutu joshua",
        scripture: "Deutronomy 8:2",
        videoLink: "https://www.youtube.com/embed/uIIzoerpW-Q",
        audioLink: "https://awss30258.s3.amazonaws.com/next-s3-uploads/The_King_Who_Restores_the_Sinner__Mark_140-217__Pastor_Joshua_Bolaji(128k).m4a",
        id: 3
    },
]


const Details = () => {

    const [current, setCurrent] = useState(series[0])


    const changeCurrent = (index) => {
        setCurrent(series[index])
        scrollToTop()
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const scrollToAll = () => {
        window.scrollTo({
            top: 1200,
            behavior: 'smooth'
        });
    };

    return (
        <div className={` !mb-20 w-full space-y-5`}>
            <Player resource={current} />
            <Body series={series} scrollToTop={scrollToTop} scrollToAll={scrollToAll}
                current={current} changeCurrent={changeCurrent} />
        </div>
    )
}

export default Details
