"use client"

import { X } from "lucide-react";
import { currencyType, TemplateType } from "../types";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import cartAtom from "../atoms/CartAtom";
import currencyAtom from "../atoms/CurrencyAtom";
import toast from "react-hot-toast";

const RemoveItem = ({ item }: {item: TemplateType}) => {
    const setCartItems = useSetRecoilState(cartAtom);
    const currency: currencyType = useRecoilValue(currencyAtom);
    const [initial, setInitial] = useState(false);
  
    useEffect(() => {
      setInitial(true);
    }, []);
  
    const handleRemoveItem = () => {
      setCartItems(cartItems => cartItems.filter(cartItem => cartItem.id !== item.id));
      toast.success(`${item.name} removed from the cart`);
    }
  
    return (
      <>{initial && <X onClick={handleRemoveItem} className="absolute bg-red-main h-5 w-5 p-1 rounded-full text-white top-0 right-0 cursor-pointer md:hidden"/>}</>
    )
}


export default RemoveItem;