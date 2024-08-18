"use client"

import { useEffect, useState } from 'react';
import cartAtom from '../atoms/CartAtom';
import Button from './Button'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useRouter } from 'next/navigation';
import paidAtom from '../atoms/PaidAtom';

const Checkout = () => {
  const cartItems = useRecoilValue(cartAtom);
  const setPaid = useSetRecoilState(paidAtom);
  const [initial, setInitial] = useState(false);
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/success");
    setPaid(true);
  }

  useEffect(() => {
    setInitial(true);
  }, []);

  return (
    <Button title="Checkout" type="checkout" length={initial ? cartItems.length : 0} onClick={handleNavigation}/>
  )
}

export default Checkout