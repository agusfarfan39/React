import { useState } from "react"

const ItemCount = ({initialValue = 1, stock, onAdd}) => {

    const [count, setCount]= useState(initialValue)
    
    const decrement = () => {
        if (count > 1) {
            setCount(count => count - 1)
        }

    }
    
    const increment = () => {
        if (count < stock) {
            setCount(prev => prev + 1)
        }
    }

    return (
        <article>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd(count)}>Agregar producto</button>
            <button onClick={increment}>+</button>
        </article>
    )
}

export default ItemCount