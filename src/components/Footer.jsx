import { CardFooter } from "react-bootstrap"

const Footer = () => {
  return (
    <CardFooter className="footer alert alert-dismissible alert-primary mt-4">
        <div className="footer-lists d-flex row text-center">
            <ul className="mb-3 col-md">
                <li>
                    <h5>Correo de contacto</h5>
                </li>
                <li>contacto@hariyalires.com</li>
            </ul>
            <ul className="mb-3 col-md">
                <li>redes sociles</li>
                <li>fb</li>
                <li>instagram</li>
            </ul>
            <ul className="mb-3 col-md">
                <li>direccion</li>
                <li>hariyali 1124, santiago</li>
            </ul>
        </div>

        <p className=" text-center p-10">
            esta es una pagina falsa hecha con fines academicos, udd bootcamp 2023
        </p>
        


    </CardFooter>
  )
}

export default Footer