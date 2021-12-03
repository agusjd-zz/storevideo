import  { createContext, useState} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children} ) =>{

    const [cart,setCart] = useState([])

    const addToCart = (item) =>{
       setCart([...cart,item])
    }
    const removeFromCart = (id) =>{
        setCart(cart.filter((el)=> el.id !== id))
    }
   
    const isInCart = (id) =>{
      return cart.some((el)=> el.id === id)
    }

    const totalCant = () =>{
        return cart.reduce((acc,el)=> acc + el.cantidad,0)
    }

    const cleanCart = () =>{
        setCart([])
    }

    const totalCompra = () =>{
        return cart.reduce((acc,el)=> acc + el.cantidad * el.precio, 0)
    }

    return(
        <CartContext.Provider
        value ={{
            cart,
            addToCart,
            isInCart,
            totalCant,
            cleanCart,
            totalCompra,
            removeFromCart
          }}>
              {children}

        </CartContext.Provider>
    )
}