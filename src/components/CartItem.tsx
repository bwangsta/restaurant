import { useContext } from "react"
import { CartDispatchContext } from "../CartContext"
import { Item } from "../types"

function CartItem(props: { item: Item }) {
  const dispatch = useContext(CartDispatchContext)!

  return (
    <li key={props.item.id} className="flex items-center justify-between">
      <button
        className="rounded-lg bg-red-500 px-2 text-white"
        onClick={() => dispatch({ type: "remove_all", id: props.item.id })}
      >
        x
      </button>
      <img className="w-20" src={props.item.img} alt={props.item.name} />
      <p>{props.item.name} </p>
      <p>{props.item.price} Mora</p>
      <button
        className="border-2"
        onClick={() => dispatch({ type: "remove", id: props.item.id })}
      >
        -
      </button>
      {props.item.amount}
      <button
        className="border-2"
        onClick={() => dispatch({ type: "add", id: props.item.id })}
      >
        +
      </button>
    </li>
  )
}

export default CartItem
