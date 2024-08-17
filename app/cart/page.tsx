import OrderSummary from "../../components/OrderSummary"
import CartDetails from "../../components/CartDetails"

const Cart = () => {
  return (
    <div className="flex flex-col">
    <div className="flex flex-col gap-10 md:grid md:grid-cols-12 md:grid-rows-1 md:h-4/5 mt-[100px] md:gap-4">
      <div className="md:col-span-8">
        <CartDetails/>
      </div>
      <div className="md:col-span-4">
        <OrderSummary/>
      </div>
    </div>
    </div>
  )
}

export default Cart