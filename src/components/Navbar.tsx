import { Link } from "react-router-dom"
import guobaLogo from "../assets/img/guoba-logo.svg"

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <img src={guobaLogo} alt="Wanmin Restaurant Logo" className="navbar--logo"></img>
        </Link>
        <Link to="/">
          Home
        </Link>
        <Link to="/menu">
          Menu
        </Link>
        <Link to="/contact">
          Contact Us
        </Link>
      </nav>
    </header>
  )
}

export default Navbar