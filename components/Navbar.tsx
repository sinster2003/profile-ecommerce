import { ShoppingCartIcon } from "lucide-react"
import Image from "next/image"
import CartCount from "./CartCount"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="fixed flex justify-between items-center text-darkblue py-3.5 w-11/12 mx-[60px] z-50 backdrop-blur-lg">
        <Link href="/" className="flex items-center gap-1.5">
            <Image src="https://p1.edge.duggup.com/logo/Profile_Icon_Full_Color_28px.svg" alt="logo" width={27} height={27}/>
            <span className="text-[23px] font-medium tracking-tight">ecommerce</span>
        </Link>
        <Link href="/cart" className="relative">
            <CartCount/>
            <ShoppingCartIcon/>
        </Link>
    </div>
  )
}

export default Navbar