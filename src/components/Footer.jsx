import { CardFooter } from "react-bootstrap"

const Footer = () => {
  return (
    <CardFooter className="footer alert alert-primary mt-4">
        <div className="footer-lists d-flex row text-center mt-2">
            <ul className="mb-3 col-md">
                <li>
                    <h5>Correo de contacto</h5>
                </li>
                <li>contacto@hariyalires.com</li>
            </ul>
            <ul className="mb-3 col-md">
                <li>
                    <h5>Teléfono</h5>
                </li>
                <li>+56 9 2234 6544</li>
            </ul>
            <ul className="mb-3 col-md">
                <li>
                    <h5>Dirección</h5>
                </li>
                <li>Monte Borta 1124, Santiago</li>
            </ul>
        </div>

        <p className=" text-center p-10 mt-3">
            Esta página fue hecha con fines académicos y no representa a un restaurante real.
            <br />
            Bootcamp UDD, 2023
        </p>
        


    </CardFooter>
  )
}

export default Footer