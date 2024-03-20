import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name, category, price, img, stock}) => {
    return (
        <article>
            <h4>categoria: {category}</h4>
            <h3>{name}</h3>
            <img src= {img}/>
            <h4>${price}</h4>
            <ItemCount stock={stock}/>
            
        </article>
    )
}
export default ItemDetail
