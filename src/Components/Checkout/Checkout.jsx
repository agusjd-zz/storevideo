import React, { useContext, useState } from 'react'
import {Button} from 'react-bootstrap'
import { CartContext } from '../../Context/CartContext'
import { Timestamp,collection,addDoc } from '@firebase/firestore/lite'
import { db } from '../../Firebase/Config'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const [orderId,setOrderId ] = useState(null)

    const [values,setValues] = useState('')
    const {cart ,totalCompra,cleanCart} = useContext(CartContext)

    const generateOrder = (buyer)=>{
        
        const order = {
            buyer: buyer,
            items: cart,
            total: totalCompra(),
            date: Timestamp.fromDate(new Date())
        }

        const ordersRef = collection(db,'orders')

        addDoc(ordersRef,order)
            .then((res)=>{
                setOrderId(res.id)
                cleanCart()
            })
       
        
    }
    
    const handleInputChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()

        if (values.name.length >4 && values.email.length>5){
            generateOrder(values)
        }
        else{
            alert("Campos Invalidos")
        }

    }

    return (
        <div className="container text-center">
                {orderId ?
                <>
                    <h2>Gracias por su compra</h2>
                    <p>Su numero de compra es: {orderId}  </p>
                    <Link to="/"> <Button>Volver</Button></Link>
                </>
                : 
                <>
                    <h2>Resumen de compra</h2>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input type="text"className="form-control my-2"placeholder="Nombre" value={values.name} onChange={handleInputChange} name="name" required />
                        <input type="mail" className="form-control my-2"placeholder="Email"value={values.email} onChange={handleInputChange} name="email" required/>
                        <input type="number"className="form-control my-2" placeholder="Telefono" value={values.phone} onChange={handleInputChange} name="phone"required/>
                        <Button variant="primary" type="submit"> Finalizar</Button>
                    </form>
                    
                </>

                
            }



            
            
        </div>
    )
}

export default Checkout
