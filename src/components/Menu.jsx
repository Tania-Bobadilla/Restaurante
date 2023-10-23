import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/Firebase";
import { Button, Card, CardGroup } from "react-bootstrap"

const Menu = () => {

  const [menu, setMenu] = useState([]);

  //Usamos useEffect para capturar datos que vienen desde Firebase
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

console.log(menu)

    


  return (
    <section>
        <h1 className="text-center">Menu</h1>
        <CardGroup className="justify-content-center mt-5">
            {menu.map((item) => (
                <div key={item.id} className="mx-3 ms-3">
                    <Card style={{width: "18rem", height: "420px"}}>
                        <Card.Img style={{height: "200px"}} variant="top" src={item.imagen} alt={item.nombre} />
                        <Card.Body>
                            <Card.Title>{item.nombre.toUpperCase()}</Card.Title>
                            <Card.Text style={{height: "100px"}}>{item.descripcion}</Card.Text>
                            <Button variant="success">Precio: ${item.precio} clp</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
            
        </CardGroup>
    </section>
  )
}
  
  export default Menu