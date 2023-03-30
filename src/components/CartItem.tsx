import { FaPlus, FaMinus } from "react-icons/fa"
import { useCartDispatch } from "../context/CartContext"
import menuData from "../data/menuData.json"
import moraIcon from "../assets/img/mora.svg"

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
          <div className="flex items-center gap-1">
            <img src={moraIcon} alt="Mora" className="w-6" />
            <p>{item.price * quantity}</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <button
              className="rounded-lg bg-red-500 px-2 text-white"
              onClick={() => dispatch({ type: "remove_all", id: id })}
            >
              Remove
            </button>
            <div className="justify-end">
              <button
                className="btn-square btn-sm btn border-2"
                onClick={() => dispatch({ type: "remove", id: id })}
              >
                <FaMinus />
              </button>
              <span className="p-2">{quantity}</span>
              <button
                className="btn-square btn-sm btn border-2"
                onClick={() => dispatch({ type: "add", id: id })}
              >
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartItem
