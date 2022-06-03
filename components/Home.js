import Address from "./Address"
import Hero from "./Hero"
import Latest from "./Latest"
import Sections from "./Sections"
import { useSelector } from "react-redux"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "../redux/features/currentUser";

const Home = () => {
    const { latest } = useSelector(state => state.latest)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser())
    }, [])
    return (
        <div className="mt-[60px]  !mb-20 sm:mt-24 w-full">
            <Hero />
            <Latest latest={latest} />
            <Sections />
            <Address/>
        </div>
    )
}

export default Home
