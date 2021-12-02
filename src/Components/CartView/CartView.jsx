import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartView = () => {

    const {cart} = useContext(CartContext)

    
    return (
        <div className="container my-5">
            <h2>CartView</h2>
            {
                cart.map((el)=>
                <div key={el.id} className="mt-5">
                    <h3> {el.nombre}  </h3>
                    <p> Precio: ${el.precio}  </p>
                    <p> Cantidad:$ {el.cantidad} </p>
                </div>      
                
                )
            }
            
        </div>
    )
}

export default CartView
