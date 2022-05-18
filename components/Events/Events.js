import Hero from "./Hero"
import Lists from "./Lists"
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { loadUser } from "../../redux/features/currentUser";

const Events = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser())
    }, [])
    return (
        <div className="!mb-20  w-full">
            <Hero />
            <Lists />
        </div>
    )
}

export default Events
