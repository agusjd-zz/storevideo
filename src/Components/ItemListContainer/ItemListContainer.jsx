import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'
import { db } from '../../Firebase/Config'
import {collection,getDocs,query,where} from 'firebase/firestore/lite'
import ItemList from '../ItemList/ItemList'

export const ItemListContainer = () => {
    const [items,setItems]  = useState([])
    const [loading,setLoading] = useState(false) 

    const {categoryId} = useParams()
    

    useEffect(() => {
      setLoading(true)

      const productosRef = collection(db,'productos')

      const q = categoryId ? query(productosRef,where('category','==',categoryId)) : productosRef

      getDocs(q)
        .then(resp =>{
          const productos = resp.docs.map((doc)=> {
            return{
              id:doc.id,
              ...doc.data()
            }
          })
          console.log(productos)

          setItems(productos)
        
        })
        .finally(()=>{
          setLoading(false)
        })

    }, [categoryId])
  
    return (
        <div className="mt-4 container d-flex"  >

          {
            loading ? <h2>Cargando...</h2> : <ItemList items ={items} />
          }
          
   
        </div>
    )
}

export default ItemListContainer
