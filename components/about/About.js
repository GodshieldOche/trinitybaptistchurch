import Body from "./Body"
import Hero from "./Hero"
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useState } from "react"

const About = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', toggleVisible);
    }
    

    return (
        <div className=" w-full space-y-4 relative">
            <Hero/>
            <Body />
            <div
                onClick={scrollToTop}
                className={`${visible ? "inline transition ease-in-out duration-200" : "hidden"} fixed cursor-pointer bottom-7 right-3 md:right-7 bg-primary-light p-3 rounded-full`}>
                <ArrowCircleUpIcon className="!text-gray-100"/>
            </div>
        </div>
    )
}

export default About
