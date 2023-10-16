import { Outlet } from "react-router-dom"
import Navigation from "../../routes/navigation/Navigation"

function Layout() {
  return (
    <div>
        <Navigation/>    
        <Outlet/>
    </div>
  )
}

export default Layout