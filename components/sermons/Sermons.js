import Hero from "./Hero"
import List from "./List"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Sermons = () => {
    const router = useRouter()

    useEffect(() => {
        console.log(router)
    }, [])
    return (
        <div className="!mb-40  w-full">
            <Hero />
            <List />
        </div>
    )
}

export default Sermons
