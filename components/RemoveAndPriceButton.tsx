"use client"

import { X } from "lucide-react";
import { currencyType, TemplateType } from "../types";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import cartAtom from "../atoms/CartAtom";
import currencyAtom from "../atoms/CurrencyAtom";
import toast from "react-hot-toast";

const RemoveAndPriceButton = ({ item }: {item: TemplateType}) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const setCartItems = useSetRecoilState(cartAtom);
  const currency: currencyType = useRecoilValue(currencyAtom);
  const [initial, setInitial] = useState(false);
  const unit = (currency === "usd") ? "$" : currency === "inr" ? "₹" : "€";

  useEffect(() => {
    setInitial(true);
  }, []);

  const handleMouseOver = () => {
    setIsMouseOver(true);
  }

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  }

  const handleRemoveItem = () => {
    setCartItems(cartItems => cartItems.filter(cartItem => cartItem.id !== item.id));
    toast.success(`${item.name} removed from the cart`);
  }

  return (
    <div className="bg-red-main rounded-tr-xl rounded-br-xl h-full flex justify-center items-center text-white w-[100px] cursor-pointer" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} onClick={handleRemoveItem}>
      {initial && (isMouseOver ? <X/> : `${unit}${(item.price[currency] * (item.quantity || 1)).toFixed(2)}`)}
    </div>
  )
}

export default RemoveAndPriceButton