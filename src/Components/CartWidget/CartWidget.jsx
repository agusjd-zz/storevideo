import React, { useContext } from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import { CartContext} from '../../Context/CartContext'
import './CartWidget.scss'

export const CartWidget = () => {
    const {totalCant} = useContext(CartContext)

    return (
        <div className="cartWidget">
            <FiShoppingCart/>
            <span>{totalCant()}  </span>
        </div>
            
            
    )
}

export default CartWidget
