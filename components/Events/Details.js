import Body from './Body'
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { loadUser } from "../../redux/features/currentUser";

const Details = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser())
    }, [])
    return (
        <div className="!mb-20  w-full space-y-5">  
            <Body />
        </div>
    )
}

export default Details
