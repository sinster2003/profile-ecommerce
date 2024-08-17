"use client"

import { currencyType, TemplateType } from "../types";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import currencyAtom from "../atoms/CurrencyAtom";

const CalculatedPrice = ({ item }: {item: TemplateType}) => {
  const currency: currencyType = useRecoilValue(currencyAtom);
  const [initial, setInitial] = useState(false);
  const unit = (currency === "usd") ? "$" : currency === "inr" ? "₹" : "€";

  useEffect(() => {
    setInitial(true);
  }, []);

  return (
    <>
        {initial && <span className="text-red-main">{`${unit}${(item.price[currency] * (item.quantity || 1)).toFixed(2)}`}</span>}
    </>
  )
}

export default CalculatedPrice