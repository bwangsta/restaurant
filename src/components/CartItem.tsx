import { useContext } from "react"
import { CartDispatchContext } from "../CartContext"
import { Item } from "../types"

function CartItem(props: { item: Item }) {
  const dispatch = useContext(CartDispatchContext)!

  return (
    <li key={props.item.id}>
      <div className="grid grid-cols-2 items-center gap-4 py-4">
        <figure>
          <img src={props.item.img} alt={props.item.name} />
        </figure>
        <div className="flex flex-1 flex-col gap-1">
          <h2 className="flex-1 text-xl">{props.item.name}</h2>
          <p>{props.item.price} Mora</p>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <button
              className="rounded-lg bg-red-500 px-2 text-white"
              onClick={() =>
                dispatch({ type: "remove_all", id: props.item.id })
              }
            >
              Remove
            </button>
            <div className="justify-end">
              <button
                className="btn-sm btn-square border-2"
                onClick={() => dispatch({ type: "remove", id: props.item.id })}
              >
                -
              </button>
              <span className="p-2">{props.item.amount}</span>
              <button
                className="btn-sm btn-square border-2"
                onClick={() => dispatch({ type: "add", id: props.item.id })}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartItem
