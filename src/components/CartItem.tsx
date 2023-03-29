import { useCartDispatch } from "../context/CartContext"
import menuData from "../data/menuData.json"

type CartItemProps = {
  id: number
  quantity: number
}

function CartItem({ id, quantity }: CartItemProps) {
  const dispatch = useCartDispatch()
  const item = menuData.find((item) => item.id === id)!

  return (
    <li key={id}>
      <div className="grid grid-cols-2 items-center gap-4 py-4">
        <figure>
          <img src={item.img} alt={item.name} />
        </figure>
        <div className="flex flex-1 flex-col gap-1">
          <h2 className="flex-1 text-xl">{item.name}</h2>
          <p>{item.price * quantity} Mora</p>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <button
              className="rounded-lg bg-red-500 px-2 text-white"
              onClick={() => dispatch({ type: "remove_all", id: id })}
            >
              Remove
            </button>
            <div className="justify-end">
              <button
                className="btn-sm btn-square border-2"
                onClick={() => dispatch({ type: "remove", id: id })}
              >
                -
              </button>
              <span className="p-2">{quantity}</span>
              <button
                className="btn-sm btn-square border-2"
                onClick={() => dispatch({ type: "add", id: id })}
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
