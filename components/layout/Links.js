import Link from "next/link"
import { useRouter } from "next/router"

const Links = ({ title }) => {
    const router = useRouter()

    return (
        <Link href={`/${title}`} ><a className={`${router.pathname.split("/")[1] === title ? "font-medium" : "font-light"} capitalize `}>{ title }</a></Link>
    )
}

export default Links
