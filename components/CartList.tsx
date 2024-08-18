"use client"

import { useRecoilValue, useSetRecoilState } from "recoil"
import cartAtom from "../atoms/CartAtom"
import CartListCard from "./CartListCard";
import { useEffect, useRef, useState } from "react";
import sliderAtom from "../atoms/SliderAtom";
import sliderVisibleAtom from "../atoms/SliderVisibleAtom";
import EmptyCart from "./EmptyCart";
import { CardItemSkeleton } from "./Skeleton";

const CartList = () => {
  const cartList = useRecoilValue(cartAtom);
  const scrollCount = useRecoilValue(sliderAtom);
  const setVisible = useSetRecoilState(sliderVisibleAtom);
  const scrollItem = useRef<HTMLDivElement>(null);
  const [initial, setInitial] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInitial(true);
    setLoading(false);
  }, []);

  useEffect(() => {
    if(scrollItem.current) {
      // when there no scrollable height making the slider invisible
      if(scrollItem.current.scrollHeight === scrollItem.current.clientHeight) {
        setVisible(false);
      }
      else {
        setVisible(true);
        scrollItem.current.scrollTo({
          behavior: "smooth",
          // top when scrollCount is maximum must reach the non visible area
          top: (scrollCount / 100) * (scrollItem.current.scrollHeight - scrollItem.current.clientHeight) 
        })
      }
    }
  }, [scrollCount, initial, cartList]);

  if(loading) {
    return (
      <div className={`flex flex-col gap-5 items-center my-10 px-4 md:px-10 h-[50vh]`}>
        <CardItemSkeleton/>
        <CardItemSkeleton/>
        <CardItemSkeleton/>
        <CardItemSkeleton/>
      </div>
    );
  }

  return (
    <>
    {initial && <div ref={scrollItem} className={`flex flex-col gap-8 md:gap-5 items-center my-6 md:my-10 px-4 md:px-10 max-h-[50vh] overflow-scroll ${cartList.length === 0 && "h-[70vh] justify-center"}`}>
      {(cartList.length > 0 ? cartList.map(item => <CartListCard key={item.id} item={item}/>) : <EmptyCart/>)}
    </div>}
    </>
  )
}

export default CartList