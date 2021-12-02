import  { createContext, useState} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children} ) =>{

    const [cart,setCart] = useState([])

    const addToCart = (item) =>{
       setCart([...cart,item])
    }
    console.log(cart)
  
    const isInCart = (id) =>{
      return cart.some((el)=> el.id === id)
    }

    return(
        <CartContext.Provider
        value ={{
            cart,
            addToCart,
            isInCart
          }}>
              {children}

        </CartContext.Provider>
    )
}