import Player from "../Player"
import Body from "./Body"


const sermon = {
    title: "prophets and the word of the lord",
    preacher: "peter abutu joshua",
    scripture: "jeremiah 28:1-17",
    audioLink: "https://awss30258.s3.amazonaws.com/next-s3-uploads/The_King_Who_Restores_the_Sinner__Mark_140-217__Pastor_Joshua_Bolaji(128k).m4a",
    videoLink: "https://www.youtube.com/embed/ty1PL9V0iys",
    id: 1
}


const Sermon = () => {

    return (
        <div className="!mb-20  w-full space-y-5">
            <Player resource={sermon} />
            <Body resource={sermon} />
        </div>
    )
}

export default Sermon
