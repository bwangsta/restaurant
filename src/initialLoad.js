import Tabs from "./components/Tabs"
import Home from "./components/Home"
import Menu from "./components/Menu"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function initialLoad() {
    const main = document.querySelector("main")

    document.body.prepend(Tabs())
    main.append(
        Home(),
        Menu(),
        Contact(),
        Footer()
    )
}

export default initialLoad