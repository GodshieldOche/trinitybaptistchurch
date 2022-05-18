import Hero from "./Hero"
import List from "./List"
import { useRouter } from "next/router"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "../../redux/features/currentUser";

const Sermons = () => {
    const router = useRouter()
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

export default Sermons
