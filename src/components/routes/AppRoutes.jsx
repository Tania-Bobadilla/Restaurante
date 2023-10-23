import {Route, Routes} from "react-router-dom";
import Home from "../Home";
import Menu from "../Menu";
import Reservas from "../Reservas";
import Form from "../Form"
import Layout from "../layout/Layout";


const AppRoutes = () => {
  return (
    <div>
        
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/home" element={<Home/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/reservas" element={<Reservas/>}/>
                <Route path="/contacto" element={<Form/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default AppRoutes