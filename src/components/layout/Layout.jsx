import Navigation from "../routes/navigation/Navigation"
import Footer from "../Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
        <Navigation/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default Layout