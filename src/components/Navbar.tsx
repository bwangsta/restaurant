import { Link } from "react-router-dom"
import { BsCart3 } from "react-icons/bs"
import guobaLogo from "../assets/img/guoba-logo.svg"

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="navbar__logo">
          <img src={guobaLogo} alt="Wanmin Restaurant Logo" className="logo"></img>
        </Link>
        <div className="nav-items">
          <Link to="/">
            Home
          </Link>
          <Link to="/menu">
            Menu
          </Link>
          <Link to="/contact">
            Contact
          </Link>
        </div>
        <Link to="/checkout">
          <BsCart3 className="nav__icon" />
        </Link>
      </nav>
    </header>
  )
}

export default Navbar