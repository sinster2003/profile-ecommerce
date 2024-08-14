import OrderSummary from "../../components/OrderSummary"
import CartDetails from "../../components/CartDetails"

const Cart = () => {
  return (
    <div className="flex flex-col">
    <div className="grid grid-cols-12 grid-rows-1 h-4/5 mt-[100px] gap-4">
      <div className="col-span-8">
        <CartDetails/>
      </div>
      <div className="col-span-4">
        <OrderSummary/>
      </div>
    </div>
    </div>
  )
}

export default Cart