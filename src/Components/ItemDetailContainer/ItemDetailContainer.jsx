import React, { useEffect,useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {pedirItem} from '../../Helpers/pedirItem'
import { useParams } from 'react-router'


export const ItemDetailContainer = () => {
    const [item,setItem] = useState(0)

    const [loading,setLoading] = useState(false)

    const {itemId}  = useParams()
    console.log(itemId)
    console.log(item)

    useEffect(()=>{
        setLoading(true)
        pedirItem(Number(itemId))
        .then(resp => setItem(resp))
        .finally(()=>{
            setLoading(false)
        })
    },[itemId])

    return (
        <div>
            <h2> Item Detail Container </h2>
            {loading 
            ? <h2>Cargando</h2>
            :<ItemDetail item={item}/>}
        
        </div>
    )
}

export default ItemDetailContainer
