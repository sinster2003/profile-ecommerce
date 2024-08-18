"use client"

import { useRouter } from "next/navigation"
import Button from "./Button"

const SuccessButton = () => {
  const router = useRouter();
  const handleNavigation = () => { 
    router.push("/"); 
  }

  return (
    <Button title="Home" onClick={handleNavigation}/>
  )
}

export default SuccessButton