import { useState } from "react";
import { db } from "../config/Firebase";
import { collection, addDoc } from "firebase/firestore";

const ContactForm = () => {

  const initialValues = {
    name: "",
    phone:"",
    email:"",
    text:""
  };

  const [user, setUser] = useState(initialValues);
  

  const captureInputs = (event) => {
    const {name, value} = event.target;

    //Se copian los valores iniciales y tambien los valores que el usuario ingrese en los inputs
    setUser ({...user, [name]: value})
  };

  const saveInputs = async (event) => {
    event.preventDefault();


    try {
      await addDoc(collection(db, "contactos"),{
        ...user
      })
    } catch(error){
      console.log(error)
    }

    
    //Una vez se envian los datos, se hace una copia de los valores iniciales para que el formulario se actualize y quede vacio
    setUser ({...initialValues});
    alert("Tu mensaje fue enviado")
 
    
  };

  

  return (
    
    <div className="row m-2">

      <img src="https://c.ndtvimg.com/2023-01/m0dmrm58_spices_625x300_18_January_23.jpg?im=FaceCrop,algorithm=dnn" className="col-xl-8" />    

      <form onSubmit={saveInputs} className="text-center mb-3 d-flex p-3 col-md">
        <div className="card card-body d-flex">
            <div className="form-group">
              <h3 className="m-5">Contacto</h3>

              <input className="form-control p-3 mb-2" type="text" name="name" placeholder="Nombre" onChange={captureInputs} value={user.name}/>
            
              <input className="form-control p-3 mb-2" type="text" name="email" placeholder="Correo" onChange={captureInputs} value={user.email}/>

              <textarea className="form-control p-3" name="text" placeholder="Escribe tu consulta, sugerencia o reclamo aquí" onChange={captureInputs} value={user.text}></textarea>

              <button className="btn btn-primary mt-3">Enviar</button>
            </div>
          </div>
      </form>
    </div>

      


  )
}

export default ContactForm
