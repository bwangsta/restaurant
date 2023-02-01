import { useContext } from "react"
import { CartDispatchContext } from "../CartContext"

function MenuItem(props:
  { id: number, img: string, name: string, price: number }
) {
  const dispatch = useContext(CartDispatchContext)!

  return (
    <article className="menu-card">
      <button
        className="add-btn"
        onClick={() => dispatch({ type: "add", id: props.id })}
      >+</button>
      <img src={props.img} alt={props.name} className="menu-card-img"></img>
      <p className="menu-card-title">{props.name}</p>
      <p className="menu-card-price">{props.price} Mora</p>
    </article>
  )
}

export default MenuItem