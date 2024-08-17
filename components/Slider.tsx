"use client"

import { useRecoilState, useRecoilValue } from "recoil"
import sliderAtom from "../atoms/SliderAtom";
import sliderVisibleAtom from "../atoms/SliderVisibleAtom";
import cartAtom from "../atoms/CartAtom";
import { useEffect, useState } from "react";

const Slider = () => {
  const [scrollCount, setScrollCount] = useRecoilState(sliderAtom);
  const visible = useRecoilValue(sliderVisibleAtom);
  const cartItems = useRecoilValue(cartAtom);
  const [initial, setInitial] = useState(false);

  useEffect(() => {
    setInitial(true);
  }, [])

  return (
    <>
      {(initial && visible && cartItems.length > 0) ? <div className="text-center absolute bottom-[60px] left-[50%] -translate-x-[50%]">
        <input type="range" id="cartinput" className="cursor-pointer" value={scrollCount} onChange={(e) => setScrollCount(Number(e.target.value))}/>
      </div> : null}
    </>
  )
}

export default Slider