
import { stock } from '../Data/stock'

export const pedirItem = (id) =>{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
         resolve(stock.find(el => el.id === id))
       },1000)
    })
  }

export default pedirItem
