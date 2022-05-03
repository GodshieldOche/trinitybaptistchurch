import Header from "./Header"
import Footer from "./Footer"
import Menu from "../Menu"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setMenuState } from "../../redux/features/menu"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const Layout = ({ children }) => {
    
    const { menuState } = useSelector(state => state.menu)
    const dispatch = useDispatch()

    return (
        <div className="font-Poppins  text-gray-900 overflow-x-hidden">
            <Menu menuState={menuState} />
            <div className={`${menuState ? " overflow-y-hidden  " : "w-full"} `}
                onClick={() => menuState && dispatch(setMenuState(false))}>
                <Header menState={menuState} />
                <ToastContainer position="bottom-right" />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout
