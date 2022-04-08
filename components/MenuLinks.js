import Link from "next/link"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { setMenuState } from "../redux/features/menu"
import { useDispatch } from "react-redux"

const MenuLinks = ({ title }) => {
    const router = useRouter()
    const { menuState } = useSelector(state => state.menu)
    const dispatch = useDispatch()

    return (
        <Link href={`/${title}`} className="">
            <a >
                <h1 className={`
                ${menuState ? "text-[white]/70 " : "!text-primary-black"}
                ${router.pathname.split("/")[1] === title ? "font-medium !text-[white]" : "font-light"}
                text-xl md:text-lg hover:font-medium hover:!text-[white]/60 capitalize`}
                    onClick={() => {
                        dispatch(setMenuState(false))
                    }}
                >{title}</h1>
            </a>
        </Link>
    )
}

export default MenuLinks
