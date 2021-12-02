import React from 'react'
import { Button } from 'react-bootstrap'
import useCounter from '../../Hooks/useCounter'
export const ItemCount = ({stock ,initial = 0}) => {

    const { counter,increment,decrement} = useCounter(initial,stock,0)
      
    
    return (
        <div className= "mt-4" >
            <p> Cantidad </p>
            <Button variant="primary" onClick={decrement} >-</Button>
            
            <span className="mx-2 ">{counter} </span>
            <Button variant="primary" onClick={increment} >+</Button>
            <div className="mt-1">
                <Button variant="primary">Agregar</Button>
            </div>
        </div>
    )
}
