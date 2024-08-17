"use client"

import { useRecoilValue } from "recoil"
import { currencyType, PriceType } from "../types"
import { useEffect, useState } from "react";
import currencyAtom from "../atoms/CurrencyAtom";
import Image from "next/image";

const Price = ({ price }: { price: PriceType}) => {
  const currency = useRecoilValue<currencyType>(currencyAtom);
  const [initial, setInitial] = useState(false);
  const unit = (currency === "usd") ? "$" : currency === "inr" ? "₹" : "€";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInitial(true);
    setLoading(false);
  }, []);

  if(loading) {
    return <Image src="/loading.gif" alt="loading..." height={32} width={32}/>
  }

  return (
    <>
        {initial && <span>{unit}{price[currency].toFixed(2)}</span>}
    </>
  )
}

export default Price