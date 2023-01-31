import CartItem from "./CartItem"

import { Item } from "../types"

function Cart(props: {
  cart: Item[],
  addToCart: (id: number) => void,
  removeFromCart: (id: number) => void,
  clearCart: (id: number) => void
}
) {
  let totalPrice = 0

  const cartItems = props.cart.map(item => {
    if (item.amount > 0) {
      totalPrice += item.price * item.amount
      return (
        <CartItem
          key={item.id}
          item={item}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
          clearCart={props.clearCart}
        />
      )
    }
  })

  return (
    <div className="cart">
      <h1>Cart Component</h1>
      <ul className="cart__items">
        {cartItems}
      </ul>
      <p className="cart__total">Total: {totalPrice} Mora</p>
      <button className="order-btn">Place Order</button>
    </div>
  )
}

export default Cart