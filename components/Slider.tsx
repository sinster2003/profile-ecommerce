"use client"

import { useRecoilState, useRecoilValue } from "recoil"
import sliderAtom from "../atoms/SliderAtom";
import sliderVisibleAtom from "../atoms/SliderVisibleAtom";

const Slider = () => {
  const [scrollCount, setScrollCount] = useRecoilState(sliderAtom);
  const visible = useRecoilValue(sliderVisibleAtom);

  return (
    <>
      {visible ? <div className="text-center absolute bottom-[60px] left-[50%] -translate-x-[50%]">
        <input type="range" id="cartinput" className="cursor-pointer" value={scrollCount} onChange={(e) => setScrollCount(Number(e.target.value))}/>
      </div> : null}
    </>
  )
}

export default Slider