import React from 'react'
import {Item} from '../Item/Item'

const ItemList = ({items}) => {
    return (
        <div className="container row my-5">
            <h2 className="mt-2 mb-5">Productos</h2>
           {
               items.map((el)=> <Item item={el}/>)
           }
            
        </div>
    )
}

export default ItemList
