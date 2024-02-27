import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (


        <div className='wrapper'>

            <aside>

                <header><h1 className='logo'>Hockey Planet</h1></header>

                <div >
                    <nav>
                        <ItemListContainer 
                        
                        itemUno = "Inicio"
                        itemDos = "Productos"
                        itemTres = "Contacto"
                        itemCuatro = "Envíos"
                        itemCinco = "Carrito" 
                        
                        />
                        <CartWidget/>
                    </nav>
                </div>
            </aside>



        </div>




    )
}

export default Navbar;
