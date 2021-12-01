import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const Item = ({item}) => {
    return (
        
        <Card style={{ width: '18rem' }} className="m">
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>
                {item.descripcion}<br/>
                {item.precio}
                </Card.Text>
               
               <Link to= {`/detail/${item.id}`} > <Button variant="primary">Ver mas</Button></Link>
            
            </Card.Body>
        </Card>            
         
    )
}

export default Item
