import ProductCard from "../components/ProductCard";
import items from "../templates.json";

const Home = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl md:text-3xl mt-[100px] text-center text-headerblue">Pick the template which reflects you</h1>
      <div className="min-h-screen md:mt-[120px] md:pb-20 md:grid md:grid-cols-12 md:gap-20 mx-0 md:mx-20">
        {items.map(item => <ProductCard key={item.id} item={item}/>)}
      </div>
    </div>
  )
}

export default Home