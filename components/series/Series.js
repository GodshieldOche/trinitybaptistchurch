import Hero from "./Hero"
import List from "./List"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "../../redux/features/currentUser";

const Series = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser())
    }, [])

    return (
        <div className="!mb-20  w-full">
            <Hero />
            <List />
        </div>
    )
}

export default Series
