import React from 'react'
import { Card } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'

export const Item = ({item}) => {
    return (
        
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
         
    )
}

export default Item
