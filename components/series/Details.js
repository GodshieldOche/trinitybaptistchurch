import { useEffect } from "react"
import { useState } from "react"
import Player from "../Player"
import Body from "./Body"

const series = [
   
    {
        title: "prophets and the word of the lord",
        preacher: "peter abutu joshua",
        scripture: "jeremiah 28:1-17",
        videoLink: "https://www.youtube.com/embed/KmVZy-IWP0M",
        audioLink: "https://awss30258.s3.amazonaws.com/next-s3-uploads/The_King_Who_Restores_the_Sinner__Mark_140-217__Pastor_Joshua_Bolaji(128k).m4a",
        id: 1
    },
    {
        title: "the path of the plain word of god",
        preacher: "peter abutu joshua",
        scripture: "Deutronomy 4:1-20",
        videoLink: "https://www.youtube.com/embed/rLcyKnAmXk0",
        audioLink: "https://awss30258.s3.amazonaws.com/next-s3-uploads/The_King_Who_Restores_the_Sinner__Mark_140-217__Pastor_Joshua_Bolaji(128k).m4a",
        id: 2
    },
    {
        title: "the path of sufferring",
        preacher: "peter abutu joshua",
        scripture: "Deutronomy 8:2",
        videoLink: "https://www.youtube.com/embed/gjgpFx7IqPo",
        audioLink: "https://awss30258.s3.amazonaws.com/next-s3-uploads/The_King_Who_Restores_the_Sinner__Mark_140-217__Pastor_Joshua_Bolaji(128k).m4a",
        id: 3
    },
    {
        title: "prophets and the word of the lord",
        preacher: "peter abutu joshua",
        scripture: "jeremiah 28:1-17",
        videoLink: "https://www.youtube.com/embed/KmVZy-IWP0M",
        audioLink: "https://awss30258.s3.amazonaws.com/next-s3-uploads/The_King_Who_Restores_the_Sinner__Mark_140-217__Pastor_Joshua_Bolaji(128k).m4a",
        id: 4
    },
    {
        title: "the path of the plain word of god",
        preacher: "peter abutu joshua",
        scripture: "Deutronomy 4:1-20",
        videoLink: "https://www.youtube.com/embed/rLcyKnAmXk0",
        audioLink: "https://awss30258.s3.amazonaws.com/next-s3-uploads/The_King_Who_Restores_the_Sinner__Mark_140-217__Pastor_Joshua_Bolaji(128k).m4a",
        id: 5
    },
    {
        title: "the path of sufferring",
        preacher: "peter abutu joshua",
        scripture: "Deutronomy 8:2",
        videoLink: "https://www.youtube.com/embed/gjgpFx7IqPo",
        audioLink: "https://awss30258.s3.amazonaws.com/next-s3-uploads/The_King_Who_Restores_the_Sinner__Mark_140-217__Pastor_Joshua_Bolaji(128k).m4a",
        id: 6
    },
]


const Details = () => {
    const [current, setCurrent] = useState(series[0])
    
   
    return (
        <div className="!mb-20  w-full space-y-3">
            <Player resource={current} />
            <Body series={series} />
        </div>
    )
}

export default Details
