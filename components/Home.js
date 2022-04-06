import Address from "./Address"
import Hero from "./Hero"
import Latest from "./Latest"
import Sections from "./Sections"

const Home = () => {
    return (
        <div className="mt-[60px] sm:mt-24 w-full">
            <Hero />
            <Latest />
            <Sections />
            <Address/>
        </div>
    )
}

export default Home
