import { useCart, useCartDispatch } from "../context/CartContext"
import CartItem from "./CartItem"
import menuData from "../data/menuData.json"

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
      <p className="text-xl">Total: {totalPrice} Mora</p>
      <button
        className="btn-sm btn"
        onClick={() => dispatch({ type: "clear" })}
      >
        Clear
      </button>
      <button className="btn-sm btn">Place Order</button>
    </>
  )
}

export default Cart
