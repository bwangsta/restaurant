import { useCartDispatch } from "../context/CartContext"

type MenuItemProps = {
  id: number
  img: string
  name: string
  price: number
}

function MenuItem({ id, img, name, price }: MenuItemProps) {
  const dispatch = useCartDispatch()

  return (
    <article className="flex flex-col items-center gap-2 rounded-2xl p-4 text-center shadow-3xl">
      <button
        className="btn-circle btn self-end border-none bg-gray-200 px-4 text-2xl text-black shadow-3xl hover:bg-white"
        onClick={() => dispatch({ type: "add", id: id })}
      >
        +
      </button>
      <img src={img} alt={name} className="menu-card-img"></img>
      <p className="flex-1 text-2xl">{name}</p>
      <p className="text-lg">{price} Mora</p>
    </article>
  )
}

export default MenuItem
