import { useContext } from "react"
import { CartContext, CartDispatchContext } from "../CartContext"
import CartItem from "./CartItem"

function Cart() {
  const cart = useContext(CartContext)
  const dispatch = useContext(CartDispatchContext)!

  let totalPrice = 0

  const cartItems = cart.map((item) => {
    if (item.amount > 0) {
      totalPrice += item.price * item.amount
      return <CartItem key={item.id} item={item} />
    }
  })

  return (
    <>
      <ul className="flex-1">{cartItems}</ul>
      <p className="text-xl">Total: {totalPrice} Mora</p>
      <button
        className="btn-sm btn"
        onClick={() => dispatch({ type: "clear", id: 0 })}
      >
        Clear
      </button>
      <button className="btn-sm btn">Place Order</button>
    </>
  )
}

export default Cart
