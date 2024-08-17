"use client"

import { useEffect, useMemo, useState } from "react"
import { useRecoilValue } from "recoil";
import cartAtom from "../atoms/CartAtom";
import currencyAtom from "../atoms/CurrencyAtom";
import { currencyType } from "../types";

const TotalSum = () => {
  const cartItems = useRecoilValue(cartAtom);
  const [initial, setInitial] = useState(false);
  const currency: currencyType = useRecoilValue(currencyAtom);
  const unit = (currency === "usd") ? "$" : currency === "inr" ? "₹" : "€";

  useEffect(() => {
    setInitial(true);
  }, []);

  const subtotal = useMemo(() => {
    if(!initial) {
      return 0;
    }
    return cartItems.reduce((sum, cartItem) => {
      const quantity = cartItem.quantity as number;
      return sum + (Number(cartItem.price[currency]) * Number(quantity));
    }, 0)
  }, [cartItems, initial, currency]);

  return (
    <div className="flex flex-col gap-2 w-full md:w-[60%]">
        <div className="flex flex-col gap-1.5 py-3">
          <p className="flex justify-between items-center">Subtotal: <span>{initial ? `${unit}${subtotal.toFixed(2)}` : `$0.00`}</span></p>
          <p className="flex justify-between items-center">Discount: <span className="text-green-500">{(!initial || cartItems.length === 0) ? "Nil" : "- 10%"}</span></p>
        </div>
        <hr className="w-full border-red-main"/>
          <p className="text-xl flex justify-between items-center font-bold">Total: <span className="text-red-main">{initial ? `${unit}${(subtotal - subtotal * (10 / 100)).toFixed(2)}` : `$0.00`}</span></p>
        <hr className="w-full border-red-main"/>
    </div>
  )
}

export default TotalSum