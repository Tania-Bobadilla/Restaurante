import {Route, Routes} from "react-router-dom";
import Home from "../Home";
import Menu from "../Menu";
import Reservas from "../Reservas";
import Layout from "../layout/Layout";

const AppRoutes = () => {
  return (
    <div>
        
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/home" element={<Home/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/reservas" element={<Reservas/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default AppRoutes