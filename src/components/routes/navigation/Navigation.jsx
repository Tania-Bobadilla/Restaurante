
import { Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <Navbar className="navbar alert alert-dismissible alert-primary mb-4">
        <NavLink to="/home" className="link link-home me-auto p-2 bd-highlight display-4">Hariyali</NavLink>
        <NavLink to="/menu" className="link link-menu m-2 p-1 bd-highlight h4">Menú</NavLink>
        <NavLink to="/contacto" className="link link-contact m-2 p-1 bd-highlight h4">Contacto</NavLink>
        
    </Navbar>
  )
}

export default Navigation