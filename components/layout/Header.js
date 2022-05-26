import Image from "next/image"
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link"
import { useDispatch } from "react-redux"
import { setMenuState } from "../../redux/features/menu";
import { useRouter } from "next/router"
import Links from "./Links";
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from "react";
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from "react-redux";
import { loadUser } from "../../redux/features/currentUser";

const Header = ({ menuState }) => {

    const [toggleSearch, setToggleSearch] = useState(false);
    const [keyword, setKeyword] = useState('');
    const dispatch = useDispatch()
    const router = useRouter()

    const { loading, user, message } = useSelector(state => state.currentUser)

    useEffect(() => {
        dispatch(loadUser())
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (keyword.trim() !== '') {
            setToggleSearch(false)
            setKeyword('')
            router.push(`/search?keyword=${keyword.trim()}`)
        }
    }


    

    return (
        <div>
            <div className={` ${toggleSearch ? "h-[60px] md:h-[68px] py-1 md:py-2 " : "h-0"} transition-all duration-200 ease-in-out
            bg-white w-full shadow-sm fixed top-0 left-0 right-0  !z-50 `}>
                <form onSubmit={handleSubmit} className={`${!toggleSearch ? "hidden" : "flex"} container px-2 md:px-0 xl:px-[2rem] lg:px-[1rem]  w-full h-full justify-between items-center`}>
                    <SearchIcon className="!md:text-3xl" />
                    <input
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        className="w-full px-4 py-2 
                    text-sm md:text-base md:px-8 md:py-4 bg-transparent focus:outline-none focus:bg-transparent" type="text" placeholder="Search Resources" />
                    <CloseIcon onClick={() => setToggleSearch(!toggleSearch)} className="cursor-pointer" />
                </form>
            </div>

            
            <header className={` bg-[#fff] shadow-md fixed top-0 left-0 right-0  !z-40 py-1 md:py-2 `}>
                <nav className="flex justify-between items-center h-[50px] container px-1 md:px-0 xl:px-[2rem] lg:px-[1rem]  relative">
                    <div className="flex items-center">
                        <Image src="/logo.png" width={37} height={37} alt="logo" />
                        <Link href="/"><a className="text-sm lg:text-base">Trinity Baptist Church</a></Link>
                    </div>
                    <div className=" hidden lg:flex  justify-between space-x-8 ">
                        <Links title={"ministries"} />
                        <Links title={"about"} />
                        <Links title={"resources"} />
                        <Links title={"events & news"} />
                        <Links title={"give"} />
                    </div>

                    <div className="hidden lg:flex space-x-5 items-center lg:ml-28 ">
                        {
                            user && user.role === "admin" && <Link href="/admin/resources/sermon">
                                <a>
                                    <PersonIcon className=" cursor-pointer" />
                                </a>
                            </Link>
                        }
                        <SearchIcon
                            onClick={() => setToggleSearch(!toggleSearch)}
                            className="!md:text-3xl cursor-pointer" />
                    </div>
                    <div className="flex lg:hidden items-center !space-x-5">
                        <SearchIcon
                            onClick={() => setToggleSearch(!toggleSearch)}
                            className=" !text-[28px] !text-primary-black/70 cursor-pointer " />
                        <MenuIcon
                            onClick={() => {
                                dispatch(setMenuState(true))
                            }}
                            className=" !text-4xl !text-primary-black/70 cursor-pointer" />
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default Header
