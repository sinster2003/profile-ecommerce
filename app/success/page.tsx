"use client"

import Image from 'next/image'
import SuccessButton from '../../components/SuccessButton'
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import paidAtom from '../../atoms/PaidAtom';
import cartAtom from '../../atoms/CartAtom';
import confettiFunction from '../../utils';

const Success = () => {
    const [paid, setPaid] = useRecoilState(paidAtom); 
    const setCartItems = useSetRecoilState(cartAtom);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    
    useEffect(() => {
      if(!paid) {
        toast.error("Please make a purchase");
        router.push("/cart");
      }
      else {
        setCartItems([]);
        setPaid(false);
        setLoading(false);
        confettiFunction();
        toast.success("Purchase successful");
      }
    }, []);

    if(loading) {
      return (
        <div className="h-screen flex flex-col justify-center items-center overflow-hidden">
          <Image src="/loading.gif" alt="loading..." height={64} width={64}/>
        </div>
      );
    }

    return (
      <div className="h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="flex flex-col gap-5 w-[300px] h-[300px] md:w-[500px] md:h-[500px] relative">
          <Image src="/success.jpg" alt="success-page" fill objectFit="cover" className="rounded-full"/>
        </div>
        <SuccessButton/>
      </div>
    )
}

export default Success