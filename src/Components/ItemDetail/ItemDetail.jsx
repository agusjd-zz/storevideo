import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { ItemCount } from '../ItemCount/ItemCount'

const ItemDetail = ( {item}) => {

    const navigate = useNavigate()

    const handleReturn = () =>{
        navigate(-1)

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
            <ItemCount stock= {item.stock} />
            <Button variant="primary" onClick={handleReturn} className="mt-3">Volver</Button>
        </Card.Body>
        </Card>            
        </div>
    )
}

export default ItemDetail
