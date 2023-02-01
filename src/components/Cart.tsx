import { useContext } from "react"
import { CartContext, CartDispatchContext } from "../CartContext"
import CartItem from "./CartItem"

function Cart() {
  const cart = useContext(CartContext)
  const dispatch = useContext(CartDispatchContext)!

  let totalPrice = 0

  const cartItems = cart.map(item => {
    if (item.amount > 0) {
      totalPrice += item.price * item.amount
      return (
        <CartItem
          key={item.id}
          item={item}
        />
      )
    }
  })

  return (
    <div className="cart">
      <ul className="cart__items">
        {cartItems}
      </ul>
      <p className="cart__total">Total: {totalPrice} Mora</p>
      <button onClick={() => dispatch({ type: "clear", id: 0 })}>Clear</button>
      <button className="order-btn">Place Order</button>
    </div>
  )
}

export default Cart