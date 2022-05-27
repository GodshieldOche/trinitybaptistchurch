import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import Player from "../Player"
import Body from "./Body"
import { useDispatch } from "react-redux";
import { loadUser } from "../../redux/features/currentUser";
import { useRouter } from 'next/router'



const Details = () => {

    const { series } = useSelector(state => state.clientSeriesDetails)

    const [current, setCurrent] = useState(series.sermons[0])

    const dispatch = useDispatch()
    const router = useRouter()
    useEffect(() => {
        if (router.query.index) {
            setCurrent(series.sermons[router.query.index])
        }
        dispatch(loadUser())
    }, [])


    
    const changeCurrent = (index) => {
        setCurrent(series.sermons[index])
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
            <Body series={series} scrollToTop={scrollToTop} scrollToAll={scrollToAll}
                current={current} changeCurrent={changeCurrent} />
        </div>
    )
}

export default Details
