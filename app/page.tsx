import ProductCard from "../components/ProductCard";
import items from "../templates.json";

const Home = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl mt-[100px] text-center text-headerblue">Pick the template which reflects you</h1>
      <div className="min-h-screen mt-[120px] pb-20 grid grid-cols-12 gap-20 mx-20">
        {items.map(item => <ProductCard key={item.id} item={item}/>)}
      </div>
    </div>
  )
}

export default Home