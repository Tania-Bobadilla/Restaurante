import { useState } from "react";
import { db } from "../config/Firebase";
import { addDoc, collection } from "firebase/firestore";

const BookingForm = () => {

  const initialValues = {
    name: "",
    hour:"",
    date:"" 
  };

  const [reservation, setReservation] = useState(initialValues)

  //para capturar los valores escritos en los inputs es necesario hacer funciones que capturen y guarden datos a traves de eventos
  const captureInputs = (event) => {

    //lo que se va a capturar son el valor y el nombre que estan dentro de los inputs
    const {name, value} = event.target

    //se actualiza la informacion inicial (datos vacios) tras capturar los datos 
    setReservation({...reservation, [name]: value})
  };  

  //ahora hay que asociar la info que guardada con la base de datos en Firestore
  const saveInputs = async (event) => {
    event.preventDefault();
 
    try {
      await addDoc(collection(db, "reservas"),{
        ...reservation
      })
    } catch(error){
      console.log(error)
    }

    
    //Una vez se envian los valores, se hace una copia de los valores iniciales para que el formulario se actualize y quede otra vez vacio
    setReservation ({...initialValues});
    alert("Reserva hecha")
  };


  return (
      <div className="text-center mb-5 container-md">
        <h1 className="booking">Reserva aquí</h1>
          <form onSubmit={saveInputs} className="text-center mb-3 d-flex p-3 col-md justify-content-center">

            <div className="d-flex booking-form justify-content-center">
              {/* el valor del input siempre es el estado inicial que se le asigno */}
              <input className="form-control m-3" type="text" name="name" placeholder="ingresa tu nombre" onChange={captureInputs} value={reservation.name} />
              <input className="form-control m-3" type="time" name="hour" onChange={captureInputs} value={reservation.hour} />
              <input className="form-control m-3" type="date" name="date" onChange={captureInputs} value={reservation.date}/>              
            </div>

          </form>
          
          <button className="booking-btn btn btn-primary">Reservar</button>
      </div>
  )
}
  
export default BookingForm