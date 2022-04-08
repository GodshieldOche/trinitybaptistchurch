import Header from "./Header"
import Footer from "./Footer"
import Menu from "../Menu"
import { useSelector } from "react-redux"

const Layout = ({ children }) => {
    
    const { menuState } = useSelector(state => state.menu)

    return (
        <div className="font-Poppins ">
            <Menu menuState={menuState} />
            <div className={`${menuState ? " h-screen  overflow-y-hidden  " : "w-full"} `}>
                <Header menState={menuState} />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout
