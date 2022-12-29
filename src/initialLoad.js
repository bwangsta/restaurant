import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Menu from "./components/Menu"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function initialLoad() {
    const main = document.querySelector("main")

    document.body.prepend(Navbar())
    main.append(
        Home(),
        Menu(),
        Contact(),
        Footer()
    )
}

export default initialLoad