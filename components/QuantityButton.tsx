"use client"

import { useSetRecoilState } from "recoil"
import { TemplateType } from "../types"
import cartAtom from "../atoms/CartAtom"

const QuantityButton = ({ item }: { item: TemplateType }) => {
    const setCartValue = useSetRecoilState(cartAtom);
  
    const handleIncrement = () => {
        const prevQuantity = item.quantity as number;
        setCartValue(cartItems => cartItems.map(cartItem => cartItem.id === item.id ? {...cartItem, quantity: prevQuantity + 1}: cartItem))
    }

    const handleDecrement = () => {
        const prevQuantity = item.quantity as number;
        setCartValue(cartItems => cartItems.map(cartItem => cartItem.id === item.id && prevQuantity > 1 ? {...cartItem, quantity: prevQuantity - 1}: cartItem))
    }

  return (
    <div className="flex gap-1 items-center">
        <button className="h-8 w-8 rounded-full bg-red-main text-white text-xl flex justify-center items-center" onClick={handleDecrement}>-</button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button className="h-8 w-8 rounded-full bg-red-main text-white text-xl flex justify-center items-center" onClick={handleIncrement}>+</button>
    </div>
  )
}

export default QuantityButton