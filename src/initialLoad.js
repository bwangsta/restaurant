import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Menu from "./components/Menu"
import Contact from "./components/Contact"

function initialLoad() {
    const header = document.querySelector("header")
    const main = document.querySelector("main")
    header.append(Navbar())
    main.append(
        Home(),
        Menu(),
        Contact()
    )
}

export default initialLoad