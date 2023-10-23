
import { Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <Navbar className="d-flex m-2">
        <NavLink to="/home" className="me-auto p-2 bd-highlight">home</NavLink>
        <NavLink to="/menu" className="p-2 bd-highlight">menu</NavLink>
        <NavLink to="/reservas" className="p-2 bd-highlight">reservas</NavLink>
        <NavLink to="/contacto" className="p-2 bd-highlight">contacto</NavLink>
        
    </Navbar>
  )
}

export default Navigation