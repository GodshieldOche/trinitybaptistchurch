import Player from "../Player"
import Body from "../sermons/Body"
import { useSelector } from "react-redux"

const Details = () => {

   const { bibleStudy } = useSelector(state => state.clientBibleStudy)

    return (
        <div className="!mb-20  w-full space-y-5">
            <Player resource={bibleStudy} />
            <Body resource={bibleStudy} />
        </div>
    )
}

export default Details
