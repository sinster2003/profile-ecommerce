"use client"

import { useRecoilState } from "recoil"
import cartAtom from "../atoms/CartAtom"
import { TemplateType } from "../types";
import toast from "react-hot-toast";

const AddToCart = ({ item }: { item: TemplateType }) => {
  const [cartValue, setCartValue] = useRecoilState(cartAtom);

  const handleClick = () => {
    const isPresent = cartValue.find(cartItem => cartItem.id === item.id);

    if(!isPresent) {
      setCartValue(items => [...items, {...item, quantity: 1}]);
    }
    else {
      const prevQuantity = isPresent.quantity as number;
      setCartValue(cartValue.map(cartItem => cartItem.id === isPresent.id ? {...cartItem, quantity: prevQuantity + 1} : cartItem));
    }

    toast.success(`${item.name} added into the cart`);
  }

  return (
    <button className="py-4 mb-6 px-8 bg-red-main text-white rounded-full" onClick={handleClick}>
      Add to Cart
    </button>
  )
}

export default AddToCart