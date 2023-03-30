import { Link } from "react-router-dom"
import { FaTimes } from "react-icons/fa"
import Cart from "./Cart"

type Props = {
  handleToggle: () => void
}

function Sidebar({ handleToggle }: Props) {
  return (
    <div className="drawer-side">
      <label htmlFor="sidebar" className="drawer-overlay"></label>
      <ul className="flex w-80 flex-col bg-base-100 p-4 text-base-content sm:w-[25rem]">
        <button className="btn-square btn-sm btn" onClick={handleToggle}>
          <FaTimes />
        </button>
        <Cart />
        <Link to="/checkout">
          <button className="btn" onClick={handleToggle}>
            Checkout
          </button>
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar
