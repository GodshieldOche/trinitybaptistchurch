import Header from "./Header"
import Footer from "./Footer"
import Menu from "../Menu"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setMenuState } from "../../redux/features/menu"

const Layout = ({ children }) => {
    
    const { menuState } = useSelector(state => state.menu)
    const dispatch = useDispatch()

    return (
        <div className="font-Poppins ">
            <Menu menuState={menuState} />
            <div className={`${menuState ? " overflow-y-hidden  " : "w-full"} `}
                onClick={() => menuState && dispatch(setMenuState(false))}>
                <Header menState={menuState} />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout
