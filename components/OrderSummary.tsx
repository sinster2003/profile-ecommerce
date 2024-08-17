import Checkout from "./Checkout"
import TotalSum from "./TotalSum"

const OrderSummary = () => {
    return (
      <div className="flex flex-col rounded-3xl bg-gradient-to-tr from-white to-red-light backdrop-blur-xl min-h-96 p-10 relative items-center justify-between">
        <h2 className="text-2xl text-darkblue font-medium text-center">
          Order Summary
        </h2>
        <TotalSum/>
        <Checkout/>
      </div>
    )
}

export default OrderSummary