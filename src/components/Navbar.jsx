import { Link } from "react-router-dom"
import guobaLogo from "../assets/img/guoba-logo.svg"

function Navbar() {
    return (
        <header>
            <nav className="tabs">
                <Link to="/" className="home-tab">
                    <img src={guobaLogo} alt="Wanmin Restaurant Logo" className="logo"></img>
                </Link>
                <Link to="/menu" className="menu-tab">
                    Menu
                </Link>
                <Link to="/contact" className="contact-tab">
                    Contact Us
                </Link>
            </nav>
        </header>
    )
}

export default Navbar