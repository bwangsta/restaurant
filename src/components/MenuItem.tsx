import { useContext } from "react"
import { CartDispatchContext } from "../CartContext"

function MenuItem(props: {
  id: number
  img: string
  name: string
  price: number
}) {
  const dispatch = useContext(CartDispatchContext)!

  return (
    <article className="flex flex-col items-center gap-2 rounded-2xl p-4 text-center shadow-3xl">
      <button
        className="btn-circle btn self-end border-none bg-gray-200 px-4 text-2xl text-black shadow-3xl hover:bg-white"
        onClick={() => dispatch({ type: "add", id: props.id })}
      >
        +
      </button>
      <img src={props.img} alt={props.name} className="menu-card-img"></img>
      <p className="flex-1 text-2xl">{props.name}</p>
      <p className="text-lg">{props.price} Mora</p>
    </article>
  )
}

export default MenuItem
