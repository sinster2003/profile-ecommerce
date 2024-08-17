"use client"

import { useEffect, useMemo, useState } from "react"
import { useRecoilValue } from "recoil";
import cartAtom from "../atoms/CartAtom";

const TotalSum = () => {
  const cartItems = useRecoilValue(cartAtom);
  const [initial, setInitial] = useState(false);

  useEffect(() => {
    setInitial(true);
  }, []);

  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, cartItem) => {
        const quantity = cartItem.quantity as number;
        return sum + (Number(cartItem.price.usd) * Number(quantity));
    }, 0)
  }, [cartItems, initial]);

  return (
    <div className="flex flex-col gap-2 w-[60%]">
        <div className="flex flex-col gap-1.5 py-3">
            <p className="flex justify-between items-center">Subtotal: <span>{initial ? `$${subtotal.toFixed(2)}` : "$0.00"}</span></p>
            <p className="flex justify-between items-center">Discount: <span className="text-green-500">- 10%</span></p>
        </div>
        <hr className="w-full border-red-main"/>
            <p className="text-xl flex justify-between items-center font-bold">Total: <span className="text-red-main">{initial ? `$${(subtotal - subtotal * (10 / 100)).toFixed(2)}` : "$0.00"}</span></p>
        <hr className="w-full border-red-main"/>
    </div>
  )
}

export default TotalSum