import Navigation from "../routes/navigation/Navigation"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
        <Navigation/>
        <Outlet />
    </div>
  )
}

export default Layout