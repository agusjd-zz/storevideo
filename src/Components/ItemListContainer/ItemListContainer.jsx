import React,{useEffect,useState} from 'react'
import { stock } from '../../data/stock'


export const ItemListContainer = ({greeting}) => {
    const [items,setItems]  = useState([])
    console.log(items)


    const pedirDatos = () =>{
      return new Promise((resolve,reject)=>{
         setTimeout(()=>{
           resolve(stock)
         },2000)
      })
    }
    
    useEffect(() => {
      pedirDatos()
        .then( (resp)=>{
          setItems(resp)

        })
        .catch((err)=>{
          console.log(err)
        })
        .finally(()=>{
          console.log("Promesa Finalizada")
        })
    }, [])
  
    return (
        <div>
          {greeting}
        </div>
    )
}

export default ItemListContainer
