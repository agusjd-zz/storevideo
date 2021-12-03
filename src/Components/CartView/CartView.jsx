import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../Context/CartContext'
import {BsFillTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const CartView = () => {

    const {cart,cleanCart,totalCompra,removeFromCart} = useContext(CartContext)

    
    return (
        <div className="container my-5">

            {
                cart.length === 0
                ?
                <>
                <h2>Tu Carrito esta vacio</h2>
                <Button variant="primary"><Link to ="/">Volver</Link></Button>
                
                </>
                :
                <>
                {
                cart.map((item)=>
                <div key={item.id} className="mt-5">
                    <h3> {item.nombre}  </h3>
                    <p> Precio: ${item.precio}  </p>
                    <p> Cantidad:$ {item.cantidad} </p>
                    <Button variant="danger" onClick={()=>{removeFromCart(item.id)}}><BsFillTrashFill/></Button>
                </div>      
                
                )
            }
            

            <hr/>
            <h4>Total: $ {totalCompra()} </h4>
            <Button variant="danger" onClick={cleanCart}>Vaciar</Button>
            <Button value="primary" >Terminar Compra</Button>
                </>
            }
                
            
            
        </div>
    )
}

export default CartView
