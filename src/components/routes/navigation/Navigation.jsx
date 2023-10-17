import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <div>
        <NavLink to="/home">home</NavLink>
        <NavLink to="/menu">menu</NavLink>
        <NavLink to="/reservas">reservas</NavLink>
    </div>
  )
}

export default Navigation