import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect (()=> {
        getProductById('2')
        .then(result =>{

        })
    }) 
    return (
        <main>
            <h1>Detalle de producto</h1>
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer