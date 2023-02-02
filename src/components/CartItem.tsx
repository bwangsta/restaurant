import { useContext } from "react"
import { CartDispatchContext } from "../CartContext"
import { Item } from "../types"

function CartItem(props: {
  item: Item,
}) {
  const dispatch = useContext(CartDispatchContext)!

  return (
    <li key={props.item.id} className="cart-item">
      <button
        className="clear-btn"
        onClick={() => dispatch({ type: "remove_all", id: props.item.id })}>x
      </button>
      <img className="cart-item__img" src={props.item.img} alt={props.item.name} />
      <p className="cart-item__name">{props.item.name} </p>
      <p className="cart-item__price">{props.item.price} Mora</p>
      <button onClick={() => dispatch({ type: "remove", id: props.item.id })}>-</button>
      {props.item.amount}
      <button onClick={() => dispatch({ type: "add", id: props.item.id })}>+</button>
    </li>
  )
}

export default CartItem