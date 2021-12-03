import React, { useEffect,useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router'
import {collection,getDoc,doc} from 'firebase/firestore/lite'
import { db } from '../../Firebase/Config'

export const ItemDetailContainer = () => {
    const [item,setItem] = useState(0)

    const [loading,setLoading] = useState(false)

    const {itemId}  = useParams()


    useEffect(()=>{
      setLoading(true)
      const productosRef = collection(db,'productos')
      const docRef = doc(productosRef, itemId)
      
      getDoc(docRef)
        .then((doc)=>{
            setItem(
                {
                    id:doc.id,
                    ...doc.data()
                }
            )
        })
        .finally(()=>{
            setLoading(false)
        })
    },[itemId])

    return (
        <div className="container text-center">
            <h2> Item Detail Container </h2>
            {loading 
            ? <h2>Cargando</h2>
            :<ItemDetail item={item}/>}
        
        </div>
    )
}

export default ItemDetailContainer
