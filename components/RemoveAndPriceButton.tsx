"use client"

import { X } from "lucide-react";
import { TemplateType } from "../types";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import cartAtom from "../atoms/CartAtom";

const RemoveAndPriceButton = ({ item }: {item: TemplateType}) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const setCartItems = useSetRecoilState(cartAtom);

  const handleMouseOver = () => {
    setIsMouseOver(true);
  }

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  }

  const handleRemoveItem = () => {
    setCartItems(cartItems => cartItems.filter(cartItem => cartItem.id !== item.id));
  }

  return (
    <div className="bg-red-main rounded-tr-xl rounded-br-xl h-full flex justify-center items-center text-white w-20 cursor-pointer" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} onClick={handleRemoveItem}>
        {isMouseOver ? <X/> : `$${(item.price.usd * (item.quantity || 1)).toFixed(2)}`} 
    </div>
  )
}

export default RemoveAndPriceButton