"use client"

import { useEffect, useState } from "react"
import { useRecoilState } from "recoil";
import currencyAtom from "../atoms/CurrencyAtom";
import Image from "next/image";

const SelectCurr = () => {
  const [initial, setInitial] = useState(false);
  const [currency, setCurrency] = useRecoilState(currencyAtom);

  useEffect(() => {
    setInitial(true);
  }, []);

  return (
    <div className="flex gap-1 items-center">
      {initial && <Image src={`/${currency}.png`} alt={currency} width={32} height={32}/>}
      <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="outline-none">
        <option value="usd">
          USD
        </option>
        <option value="inr">
          INR
        </option>
        <option value="eur">
          EUR
        </option>
      </select>
    </div>
  )
}

export default SelectCurr