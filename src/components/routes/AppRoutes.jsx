import {Route, Routes} from "react-router-dom";
import Home from "../Home";
import Menu from "../Menu";
import ContactForm from "../ContactForm"
import Layout from "../layout/Layout";
import BookingForm from "../BookingForm";


const AppRoutes = () => {
  return (
    <div>
        
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/home" element={<Home/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/contacto" element={<ContactForm/>}/>
                <Route path="/reservas" element={<BookingForm/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default AppRoutes