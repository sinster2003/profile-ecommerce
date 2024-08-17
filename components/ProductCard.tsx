import Image from "next/image"
import { TemplateType } from "../types"
import AddToCart from "./AddToCart"
import Price from "./Price"

const ProductCard = ({ item }: { item: TemplateType }) => {
  return (
    <div className={`flex flex-col items-center bg-gradient-to-tr from-white to-red-light backdrop-blur-xl text-darkblue rounded-3xl relative pt-5 px-2 col-span-${item.span}`}>
      <Image src={item.image_url} alt={"Avatar"} width={120} height={120} className="rounded-full absolute top-[-10%]"/>
      <div className="flex flex-col gap-1 items-center flex-wrap mt-20 pb-3">
        <span className="text-2xl">{item.name}</span>
        <span className="text-center w-[60%]">{item.description.length > 70 ? `${item.description.slice(0, 70)}...` : item.description}</span>
      </div>
      <div className="text-2xl text-red-main font-semibold">
        <Price price={item.price}/>
      </div>
      <ul className="flex flex-col gap-0.5 py-4 list-disc">
        {item.features.map(feature => <li key={feature} className="text-darkblue">{feature}</li>)}
      </ul>
      <AddToCart item={item}/>
    </div>
  )
}

export default ProductCard