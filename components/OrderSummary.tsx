import AddToCart from "./AddToCart"

const OrderSummary = () => {
    return (
      <div className="flex flex-col rounded-3xl bg-[#feefe0] min-h-96 p-10 relative">
        <h2 className="text-2xl text-darkblue font-medium text-center">
          Order Summary
        </h2>
        <div>

        </div>
        <button className="absolute bottom-4 left-[50%] -translate-x-1/2 py-4 my-2 px-8 bg-red-main text-white rounded-full">
          Checkout
        </button>
      </div>
    )
}

export default OrderSummary