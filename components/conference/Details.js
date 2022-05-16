import { useEffect } from "react"
import { useState } from "react"
import Player from "../Player"
import Body from "../series/Body"
import { useSelector } from "react-redux"


const Details = () => {

    const { conference } = useSelector(state => state.clientConference)

    const [current, setCurrent] = useState(conference.sermons[0])


    const changeCurrent = (index) => {
        setCurrent(conference.sermons[index])
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
        <div className={` !mb-20 w-full space-y-2`}>
            <Player resource={current} />
            <Body series={conference} scrollToTop={scrollToTop} scrollToAll={scrollToAll}
                current={current} changeCurrent={changeCurrent} />
        </div>
    )
}

export default Details
