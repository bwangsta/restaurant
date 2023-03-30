import { Link } from "react-router-dom"
import { HiOutlineShoppingBag } from "react-icons/hi"
import guobaLogo from "../assets/img/guoba-logo.svg"
import { useCart } from "../context/CartContext"

function Navbar() {
  const cart = useCart()

  let itemQuantity = cart.reduce((total, cartItem) => {
    return total + cartItem.quantity
  }, 0)

  return (
    <header>
      <nav className="flex items-center justify-center py-4">
        <Link to="/">
          <img
            src={guobaLogo}
            alt="Wanmin Restaurant Logo"
            className="w-12"
          ></img>
        </Link>
        <div className="mx-auto space-x-2 text-lg">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <label
          htmlFor="sidebar"
          className="btn-ghost drawer-button btn-circle btn"
        >
          <div className="indicator">
            <HiOutlineShoppingBag size={24} />
            <span className="badge badge-sm indicator-item">
              {itemQuantity}
            </span>
          </div>
        </label>
      </nav>
    </header>
  )
}

export default Navbar
