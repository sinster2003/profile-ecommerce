import Image from "next/image"
import { TemplateType } from "../types"
import AddToCart from "./AddToCart"

const ProductCard = ({ item }: { item: TemplateType }) => {
  return (
    <div className="flex flex-col items-center bg-white text-darkblue justify-center rounded-3xl relative pt-5 col-span-6">
      <Image src={item.image_url} alt={"Avatar"} width={120} height={120} className="rounded-full absolute top-[-10%]"/>
      <div className="flex flex-col gap-1 items-center flex-wrap mt-[60px]">
        <span className="text-2xl">{item.name}</span>
        <span className="text-center">{item.description}</span>
      </div>
      <div className="text-2xl text-red-main">
        <span>${item.price.usd}</span>
      </div>
      <ul className="flex flex-col gap-0.5 items-center">
        {item.features.map(feature => <li key={feature}>{feature}</li>)}
      </ul>
      <AddToCart item={item}/>
    </div>
  )
}

export default ProductCard