const Video = ({isVideo, videoLink}) => {
    return (
        <div className={` ${isVideo ? "block" : "hidden"} w-full h-[300px] md:h-[350px] relative aspect-video text-white/90 bg-black flex items-center justify-center`}>
            <iframe className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                src={videoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

export default Video
