import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'
import { pedirDatos } from '../../Helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'

export const ItemListContainer = () => {
    const [items,setItems]  = useState([])
    const [loading,setLoading] = useState(false) 

    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect(() => {
      setLoading(true)
      pedirDatos()
        .then( (resp)=>{
          if(categoryId) {
              setItems(resp.filter((el)=>el.category === categoryId))
          }else{
            setItems(resp)
          }


        })
        .catch((err)=>{
          console.log(err)
        })
        .finally(()=>{
          setLoading(false)
          console.log("Promesa Finalizada")
        })
    }, [categoryId])
  
    return (
        <div className="mt-4 container"  >

          {
            loading ? <h2>Cargando...</h2> : <ItemList items ={items} />
          }
          
   
        </div>
    )
}

export default ItemListContainer
