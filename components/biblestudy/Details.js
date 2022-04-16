import Player from "../Player"
import Body from "../sermons/Body"

const Details = () => {

    const sermon = {
        title: "The canonicity and inspiration the scriptures",
        preacher: "peter abutu joshua",
        scripture: "jeremiah 28:1-17",
        audioLink: "https://awss30258.s3.amazonaws.com/next-s3-uploads/%236+CANONICITY.mp3",
        videoLink: "https://www.youtube.com/embed/KrI3Y38QMIw",
        id: 1
    }

    return (
        <div className="!mb-20  w-full space-y-5">
            <Player resource={sermon} />
            <Body resource={sermon} />
        </div>
    )
}

export default Details
