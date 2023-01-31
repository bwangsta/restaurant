import { Item } from "../types"

function CartItem(props: {
  item: Item,
  addToCart: (id: number) => void,
  removeFromCart: (id: number) => void,
  clearCart: (id: number) => void
}) {
  return (
    <li key={props.item.id} className="cart__item">
      <button className="remove-btn" onClick={() => props.clearCart(props.item.id)}>x</button>
      {props.item.name} {props.item.price} Mora
      <button onClick={() => props.removeFromCart(props.item.id)}>-</button>
      {props.item.amount}
      <button onClick={() => props.addToCart(props.item.id)}>+</button>
    </li>
  )
}

export default CartItem