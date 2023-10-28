import {Route, Routes} from "react-router-dom";
import Home from "../../views/Home";
import Menu from "../../views/Menu";
import ContactForm from "../../views/ContactForm";
import Layout from "../layout/Layout"



const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/home" element={<Home/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/contacto" element={<ContactForm/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default AppRoutes