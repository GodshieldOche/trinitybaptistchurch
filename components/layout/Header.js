import Image from "next/image"
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link"
import { useDispatch } from "react-redux"
import { setMenuState } from "../../redux/features/menu";
import Links from "./Links";

const Header = ({ menuState }) => {

    const dispatch = useDispatch()

    return (
        <header className={` ${menuState ? "static" : "fixed top-0 left-0 right-0"} bg-[#fff] shadow-md   !z-40 py-1 md:py-2 `}>
            <nav className="flex justify-between items-center container px-1 md:px-0 relative">
                <div className="flex items-center">
                    <Image src="/logo.png" width={50} height={50} alt="logo" />
                    <Link href="/"><a className="text-sm lg:text-base">Triniy Baptist Church</a></Link>
                </div>
                <div className=" hidden lg:flex  justify-between space-x-8 ">
                    <Links title={"ministries"} />
                    <Links title={"about"} />
                    <Links title={"resources"} />
                    <Links title={"events & news"} />
                    <Links title={"give"} />
                </div>
               
                <div className="hidden lg:block lg:ml-28 ">
                    <SearchIcon className="!md:text-3xl" />
                </div>
                <div className="flex lg:hidden items-center !space-x-5">
                    <SearchIcon className=" !text-[28px] !text-primary-black/70 cursor-pointer " />
                    <MenuIcon
                        onClick={() => {
                            dispatch(setMenuState(true))
                        }}
                        className=" !text-4xl !text-primary-black/70 cursor-pointer" />
                </div>

            </nav>
        </header>
       
    )
}

export default Header
