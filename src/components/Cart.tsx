import { useCart, useCartDispatch } from "../context/CartContext"
import CartItem from "./CartItem"
import menuData from "../data/menuData.json"
import moraIcon from "../assets/img/mora.svg"

function Cart() {
  const cart = useCart()
  const dispatch = useCartDispatch()

  const totalPrice = cart.reduce((total, cartItem) => {
    const item = menuData.find((item) => item.id === cartItem.id)
    return total + (item?.price || 0) * cartItem.quantity
  }, 0)

  const cartItems = cart.map((item) => {
    return <CartItem key={item.id} {...item} />
  })

  return (
    <>
      <ul className="flex-1">{cartItems}</ul>
      <div className="flex items-center gap-2">
        <p className="text-xl">Total:</p>
        <img src={moraIcon} alt="Mora" className="w-10" />
        <p className="text-xl">{totalPrice}</p>
      </div>
      <button
        className="btn-sm btn"
        onClick={() => dispatch({ type: "clear" })}
      >
        Clear
      </button>
    </>
  )
}

export default Cart
