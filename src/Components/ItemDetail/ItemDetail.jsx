import React from 'react'
import { Card } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'

const ItemDetail = ( {item}) => {
    return (
        <div className="container">
        <Card style={{ width: '18rem' }} className="m">
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Text>
            {item.descripcion}
            </Card.Text>
            <ItemCount stock= {item.stock} />
        </Card.Body>
        </Card>            
        </div>
    )
}

export default ItemDetail
