import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (


        <div className='wrapper'>

            <aside>

                <header><h1 className='logo'>Hockey Planet</h1></header>

                <div >
                    <nav>

                      <a>Palos</a>
                      <a>Botines</a>
                      <a>Accesorios</a>
                      <a>Protecciones</a>

                        <CartWidget/>
                        
                    </nav>
                </div>
            </aside>



        </div>




    )
}

export default Navbar;
