import CartList from "./CartList"
import Slider from "./Slider"

const CartDetails = () => {
    return (
      <div className="flex flex-col rounded-3xl bg-gradient-to-tr from-white to-red-light backdrop-blur-xl h-[80vh] p-10 relative">
        <h2 className="text-2xl text-darkblue font-medium text-center">Cart Details</h2>
        <CartList/>
        <Slider/>
      </div>
    )
}
  
export default CartDetails