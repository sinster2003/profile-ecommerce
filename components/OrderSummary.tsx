import TotalSum from "./TotalSum"

const OrderSummary = () => {
    return (
      <div className="flex flex-col rounded-3xl bg-gradient-to-tr from-white to-red-light backdrop-blur-xl min-h-96 p-10 relative items-center justify-between">
        <h2 className="text-2xl text-darkblue font-medium text-center">
          Order Summary
        </h2>
        <TotalSum/>
        <button className="py-4 mt-2 mb-0 px-8 bg-red-main text-white rounded-full">
          Checkout
        </button>
      </div>
    )
}

export default OrderSummary