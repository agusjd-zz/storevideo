import React,{useEffect,useState} from 'react'
import { pedirDatos } from '../../Helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'

export const ItemListContainer = () => {
    const [items,setItems]  = useState([])
    const [loading,setLoading] = useState(false) 

    useEffect(() => {
      setLoading(true)
      pedirDatos()
        .then( (resp)=>{
          setItems(resp)

        })
        .catch((err)=>{
          console.log(err)
        })
        .finally(()=>{
          setLoading(false)
          console.log("Promesa Finalizada")
        })
    }, [])
  
    return (
        <div className="mt-4" >

          {
            loading ? <h2>Cargando...</h2> : <ItemList items ={items} />
          }
          
   
        </div>
    )
}

export default ItemListContainer
