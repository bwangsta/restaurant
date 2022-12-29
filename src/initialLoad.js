import Navbar from "./components/Navbar"
import Home from "./components/Home"

function initialLoad() {
    const header = document.querySelector("header")
    header.append(
        Navbar(),
        Home()
    )
}

export default initialLoad