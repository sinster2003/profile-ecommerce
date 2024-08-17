"use client"

import { useRecoilValue } from "recoil"
import cartAtom from "../atoms/CartAtom"
import CartListCard from "./CartListCard";

const CartList = () => {
  const cartList = useRecoilValue(cartAtom);

  return (
    <div className="flex flex-col gap-5 items-center my-10 px-10 max-h-[50vh] overflow-scroll">
      {cartList.map(item => <CartListCard key={item.id} item={item}/>)}
    </div>
  )
}

export default CartList