import Image from "next/image"
import { TemplateType } from "../types"
import QuantityButton from "./QuantityButton"
import RemoveAndPriceButton from "./RemoveAndPriceButton"
import CalculatedPrice from "./CalculatedPrice"
import RemoveMobile from "./RemoveMobile"

const CartListCard = ({ item }: { item: TemplateType}) => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center gap-4 md:gap-8 relative">
      <RemoveMobile item={item} />
      <div className="bg-white rounded-xl w-full md:w-[60%] flex justify-between items-center h-[56px] md:h-16">
        <div className="flex gap-4">
          <div className="relative w-[56px] h-[56px] md:w-[64px] md:h-[64px]">
            <Image src={item.image_url} alt={item.name} fill objectFit="cover" className="rounded-lg"/>
          </div>
          <div className="flex flex-col gap-1 md:gap-0.5 p-2 text-darkblue">
            <p className="text-base hidden md:block">{item.name.length > 35 ? `${item.name.slice(0, 30)}...` : item.name}</p>
            <p className="text-sm block md:hidden">{item.name.length > 15 ? `${item.name.slice(0, 15)}...` : item.name}</p>
            <p className="md:text-sm hidden md:block">Quantity: {item.quantity}</p>
            <div className="flex gap-4 items-center md:hidden">
              <p className="text-xs md:hidden block">Q: {item.quantity}</p>
              <p className="text-xs md:hidden block">P: <CalculatedPrice item={item}/></p>
            </div>
          </div>
        </div>
        <RemoveAndPriceButton item={item}/>
      </div>
      <QuantityButton item={item} />
    </div>
  )
}

export default CartListCard