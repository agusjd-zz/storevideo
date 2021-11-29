import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
export const ItemCount = ({stock}) => {

    const [cantidad, setCantidad] = useState(0);

    const addItem = () =>{

        if (cantidad < stock){
            setCantidad(cantidad+1)
        }     
        
    }

    const removeItem = () =>{
        if (cantidad > 0) {
            setCantidad(cantidad-1)
        }

        
    }        
    
    return (
        <div className= "mt-4" >
            <p> Cantidad </p>
            <Button variant="primary" onClick={removeItem} >-</Button>
            
            <span className="mx-2 ">{cantidad} </span>
            <Button variant="primary" onClick={addItem} >+</Button>
        </div>
    )
}
