import React from 'react'
import { Button } from 'react-bootstrap'

export const ItemCount = ({increment,decrement,onAdd,counter}) => {

      
    
    return (
        <div className= "mt-4" >
            <p> Cantidad </p>
            <Button variant="primary" onClick={decrement} >-</Button>
            
            <span className="mx-2 ">{counter} </span>
            <Button variant="primary" onClick={increment} >+</Button>
            <div className="mt-1">
                <Button variant="primary" onClick={onAdd} >Agregar</Button>
            </div>
        </div>
    )
}
