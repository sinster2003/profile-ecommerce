"use client"

import { useEffect, useState } from 'react';
import cartAtom from '../atoms/CartAtom';
import Button from './Button'
import { useRecoilValue } from 'recoil'

const Checkout = () => {
  const cartItems = useRecoilValue(cartAtom);
  const [initial, setInitial] = useState(false);

  useEffect(() => {
    setInitial(true);
  }, []);

  return (
    <Button title="Checkout" type="checkout" length={initial ? cartItems.length : 0}/>
  )
}

export default Checkout