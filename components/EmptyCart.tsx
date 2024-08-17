import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <Image src="/emptycart.png" alt="empty-cart-image" width={100} height={100}/>
      <div className="flex flex-col items-center justify-center">
      <p className="text-darkblue">Cart is empty</p>
      <Link href="/">
        <Button title="Go Shopping"/>
      </Link>
      </div>
    </div>
  )
}

export default EmptyCart