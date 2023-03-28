import { Link } from "react-router-dom"
import Cart from "./Cart"

type Props = {
  handleToggle: () => void
}

function Sidebar({ handleToggle }: Props) {
  return (
    <div className="drawer-side">
      <label htmlFor="sidebar" className="drawer-overlay"></label>
      <ul className="flex w-80 flex-col bg-base-100 p-4 text-base-content">
        <button className="btn-sm btn-square btn" onClick={handleToggle}>
          x
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
