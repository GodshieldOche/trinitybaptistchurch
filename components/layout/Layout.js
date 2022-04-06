import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children}) => {
    return (
        <div className="font-Poppins ">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
