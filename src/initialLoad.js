import Tabs from "./components/Tabs"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Menu from "./components/Menu"

function initialLoad() {
    const main = document.querySelector("main")

    document.body.prepend(Tabs())
    main.append(
        // Home()
        Menu()
    )
    document.body.append(Footer())
}

export default initialLoad