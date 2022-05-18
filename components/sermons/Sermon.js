import Player from "../Player"
import Body from "./Body"
import { useSelector } from "react-redux"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "../../redux/features/currentUser";



const Sermon = () => {

    const { sermon } = useSelector(state => state.clientSermon)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser())
    }, [])

    return (
        <div className="!mb-20  w-full space-y-5">
            <Player resource={sermon} />
            <Body resource={sermon} />
        </div>
    )
}

export default Sermon
