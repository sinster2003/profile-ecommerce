import Image from "next/image"
import { TemplateType } from "../types"
import QuantityButton from "./QuantityButton"

const CartListCard = ({ item }: { item: TemplateType}) => {
  return (
    <div className="flex w-full justify-center items-center gap-8">
        <div className="bg-white rounded-xl w-[60%] flex justify-between items-center h-16">
            <div className="flex gap-4">
                <Image src={item.image_url} alt={item.name} width={64} height={64} className="rounded-lg"/>
                <div className="flex flex-col gap-1 p-2 text-darkblue">
                    <p className="text-base">{item.name.length > 35 ? `${item.name.slice(0, 30)}...` : item.name}</p>
                    <p className="text-sm">Quantity: {item.quantity}</p>
                </div>
            </div>
            <div className="bg-red-main rounded-tr-xl rounded-br-xl h-full flex justify-center items-center text-white w-20">
                ${(item.price.usd * (item.quantity || 1)).toFixed(2)} 
            </div>
        </div>
        <QuantityButton item={item} />
    </div>
  )
}

export default CartListCard