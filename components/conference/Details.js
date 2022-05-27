import { useEffect } from "react"
import { useState } from "react"
import Player from "../Player"
import Body from "../series/Body"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { loadUser } from "../../redux/features/currentUser";
import { useRouter } from 'next/router'


const Details = () => {

    const { conference } = useSelector(state => state.clientConference)

    const [current, setCurrent] = useState(conference.sermons[0])

    const dispatch = useDispatch()
    const router = useRouter()
    useEffect(() => {
        if (router.query.index) { 
            setCurrent(conference.sermons[router.query.index])
        }
        dispatch(loadUser())
    }, [])

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
        <div className={` !mb-20 w-full`}>
            <Player resource={current} />
            <Body series={conference} scrollToTop={scrollToTop} scrollToAll={scrollToAll}
                current={current} changeCurrent={changeCurrent} />
        </div>
    )
}

export default Details
