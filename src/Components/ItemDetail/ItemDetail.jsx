import React, { useContext } from 'react'
import { Card,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import useCounter from '../../Hooks/useCounter'
import { ItemCount } from '../ItemCount/ItemCount'



const ItemDetail = ( {item}) => {

    const {addToCart,isInCart} = useContext(CartContext)

    const {counter,increment,decrement } = useCounter(0,item.stock,0)
    const navigate = useNavigate()

    const handleReturn = () =>{
        navigate(-1)

    }
    const handleAdd = () =>{

        if (counter>0){

             addToCart({
            id:item.id,
            precio:item.precio,
            nombre:item.nombre,
            cantidad:counter
        
         }) 

        }
          
        
    }
    return (
        <div className="container mt-5">
        <Card style={{ width: '18rem' }} className="m">
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Text>
            {item.descripcion}
            </Card.Text>
            {
                !isInCart(item.id)
                ?  <ItemCount 
                increment={increment} 
                decrement={decrement}  
                onAdd={handleAdd}  
                stock= {item.stock} 
                counter={counter} />
                : <Link to="/cart" className="btn btn-primary d-block"> Terminar mi compra </Link>
            }
           
            

            <Button variant="primary" onClick={handleReturn} className="mt-3">Volver</Button>
        </Card.Body>
        </Card>            
        </div>
    )
}

export default ItemDetail
