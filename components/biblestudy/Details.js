import Player from "../Player"
import Body from "../sermons/Body"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { loadUser } from "../../redux/features/currentUser";

const Details = () => {

    const { bibleStudy } = useSelector(state => state.clientBibleStudy)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser())
    }, [])

    return (
        <div className="!mb-20  w-full space-y-5">
            <Player resource={bibleStudy} />
            <Body resource={bibleStudy} />
        </div>
    )
}

export default Details
