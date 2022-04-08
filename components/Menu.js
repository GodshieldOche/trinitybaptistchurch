import { setMenuState } from "../redux/features/menu"
import { useDispatch } from "react-redux"
import CloseIcon from '@mui/icons-material/Close';
import MenuLinks from "./MenuLinks";

const Menu = ({ menuState }) => {

    const dispatch = useDispatch()

    return (
        <div className={`${menuState ? " w-full md:w-[40%] " : "w-0"} !shadow-2xl lg:hidden py-5 fixed transition-all duration-700 ease-in-out bg-[white] h-screen top-0 right-0 !z-50 !overflow-x-hidden `}>
            <div className="flex flex-col w-full px-5">
                <div className="flex justify-end">
                    <CloseIcon className={`  ${menuState ? " text-primary-black " : "text-[white]/80"} cursor-pointer transition-all duration-500 ease-in-out font-light`}
                        onClick={() => {
                            dispatch(setMenuState(false))
                        }}
                    />
                </div>
              
                <div className={`flex flex-col px-3 py-3 space-y-7  `}>
                    <MenuLinks title={"ministries"} />
                    <MenuLinks title={"about"} />
                    <MenuLinks title={"resources"} />
                    <MenuLinks title={"events & news"} />
                    <MenuLinks title={"give"} />
                </div>
            </div>
            
        </div>
    )
}

export default Menu
