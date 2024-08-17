"use client"

import { useRecoilValue } from "recoil"
import { currencyType, PriceType } from "../types"
import { useEffect, useState } from "react";
import currencyAtom from "../atoms/CurrencyAtom";


const Price = ({ price }: { price: PriceType}) => {
  const currency = useRecoilValue<currencyType>(currencyAtom);
  const [initial, setInitial] = useState(false);
  const unit = (currency === "usd") ? "$" : currency === "inr" ? "₹" : "€";
  
  useEffect(() => {
    setInitial(true);
  }, []);

  return (
    <>
        {initial && <span>{unit}{price[currency].toFixed(2)}</span>}
    </>
  )
}

export default Price