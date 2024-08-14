"use client"

import { useRecoilValue } from "recoil"
import cartAtom from "../atoms/CartAtom"
import { useMemo } from "react";
import { TemplateType } from './../types';

const CartCount = () => {
  const cartItems = useRecoilValue(cartAtom);

  const length = useMemo(() => {
    if(cartItems.length === 0) {
      return 0;
    }

    const quantityLength = cartItems.reduce((len, cartItem: TemplateType) => {
      const quantity = cartItem.quantity as number;
      return len + quantity;
    }, 0);

    return quantityLength;
  }, [cartItems]);

  return (
    <div className="rounded-full bg-red-main flex justify-center items-center text-white absolute -top-3 -right-3 h-6 w-6 text-sm">
      {length}
    </div>
  )
}

export default CartCount