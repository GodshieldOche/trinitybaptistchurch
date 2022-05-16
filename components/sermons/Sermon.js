import Player from "../Player"
import Body from "./Body"
import { useSelector } from "react-redux"



const Sermon = () => {

    const { sermon } = useSelector(state => state.clientSermon)

    return (
        <div className="!mb-20  w-full space-y-5">
            <Player resource={sermon} />
            <Body resource={sermon} />
        </div>
    )
}

export default Sermon
