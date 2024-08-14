import CartList from "./CartList"

const CartDetails = () => {
    return (
      <div className="flex flex-col rounded-3xl bg-[#feefe0] h-[80vh] p-10 relative">
        <h2 className="text-2xl text-darkblue font-medium text-center">Cart Details</h2>
        <div>
          <CartList/>
        </div>
      </div>
    )
}
  
export default CartDetails