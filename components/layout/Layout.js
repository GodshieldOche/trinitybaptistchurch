import Header from "./Header"

const Layout = ({children}) => {
    return (
        <div className="font-Poppins ">
            <Header/>
            {children}
        </div>
    )
}

export default Layout
