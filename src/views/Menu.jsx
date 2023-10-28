import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/Firebase";
import { Card, CardGroup } from "react-bootstrap";

const Menu = () => {

  const [menu, setMenu] = useState([]);

  //Se usa useEffect para capturar datos que vienen desde Firebase
  useEffect (() => {

    const getMenu = async () => {
      try{
        const collectionRef =  collection(db, "menu");
        const response = await getDocs(collectionRef);
  
        const docs = response.docs.map((doc) =>{
          const data = doc.data()
          console.log(data)
          return(data)

          
        })

        setMenu(docs);

       } catch(error){
          console.log(error)
      }

     

    }  
    getMenu() 
}, [])



  return (
    <section className="menu">
        <h1 className="text-center">Menú</h1>
        <CardGroup className="justify-content-center mt-5 text-center">
          
          {/* se hace un mapeo de los elementos guardado en Firebase para mostrarlos en la pagina */}
            {menu.map((item) => (
                <div key={item.id} className="mx-3 ms-3">
                    <Card style={{width: "18rem", height: "420px"}}>
                        <Card.Img style={{height: "200px"}} variant="top" src={item.imagen} alt={item.nombre} className="justify-content-center" />
                        <Card.Body>
                            <Card.Title>{item.nombre.toUpperCase()}</Card.Title>
                            <Card.Text style={{height: "50px"}}>{item.descripcion}</Card.Text>
                            <Card.Text>Precio: {item.precio}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))}
            
        </CardGroup>
    </section>
  )
}
  
  export default Menu