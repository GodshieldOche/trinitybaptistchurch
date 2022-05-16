import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import Player from "../Player"
import Body from "./Body"



const Details = () => {

    const { series} = useSelector(state => state.clientSeriesDetails)

    const [current, setCurrent] = useState(series.sermons[0])



    
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
        <div className={` !mb-20 w-full space-y-2`}>
            <Player resource={current} />
            <Body series={series} scrollToTop={scrollToTop} scrollToAll={scrollToAll}
                current={current} changeCurrent={changeCurrent} />
        </div>
    )
}

export default Details
