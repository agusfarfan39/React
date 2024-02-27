import CartWidget from "../CartWidget/CartWidget";

const ItemListContainer = (props) => {
    return (
        <ul className='menu'>
            <li>{props.itemUno}</li>
            <li>{props.itemDos}</li>
            <li>{props.itemTres}</li>
            <li>{props.itemCuatro}</li>
            <li>{props.itemCinco}</li>

        </ul>
    )
}

export default ItemListContainer;