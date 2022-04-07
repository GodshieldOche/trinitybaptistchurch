import Image from "next/image"
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link"

const Header = () => {
    return (
        <header className="bg-[#fff] shadow-md  fixed top-0 left-0 right-0 !z-40 py-1 md:py-2">
            <nav className="flex justify-between items-center container px-1 md:px-0 relative">
                <div className="flex items-center">
                    <Image src="/logo.png" width={50} height={50} alt="logo" />
                    <Link href="/"><a className="text-sm lg:text-base">Triniy Baptist Church</a></Link>
                </div>
                <div className=" hidden lg:flex  justify-between space-x-8 ">
                    <Link href="/ministries"><a className=" ">Ministries</a></Link>
                    <Link href="/ministries"><a className=" ">About</a></Link>
                    <Link href="/ministries"><a className=" ">Resources</a></Link>
                    <Link href="/ministries"><a className=" ">Events & News</a></Link>
                    <Link href="/ministries"><a className=" ">Give</a></Link>
                </div>
               
                <div className="hidden lg:block lg:ml-28 ">
                    <SearchIcon className="!md:text-3xl" />
                </div>
                <div className="flex lg:hidden items-center !space-x-5">
                    <SearchIcon className=" !text-[28px] !text-primary-black/70 " />
                    <MenuIcon className=" !text-4xl !text-primary-black/70" />
                </div>

            </nav>
        </header>
       
    )
}

export default Header
