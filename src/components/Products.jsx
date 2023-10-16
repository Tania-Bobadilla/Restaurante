import axios from "axios"
import { useEffect } from "react"

function Products (){

    const [products, setProducts] = ([])

    useEffect (() =>{
        const getData = async () => {
            const request = await axios("https://fakestoreapi.com/products")
            const data = await request.data
            console.log(data)
            setProducts(data)
    
        }
        getData()
    }, [])
    
    console.log(products)

    return(
        <div>
            <h1>Producto</h1>
        </div>
    )
}

export default Products