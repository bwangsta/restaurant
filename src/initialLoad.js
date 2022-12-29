import Tabs from "./components/Tabs"
import Home from "./components/Home"
import Footer from "./components/Footer"

function initialLoad() {
    const main = document.querySelector("main")

    document.body.prepend(Tabs())
    main.append(
        Home()
    )
    document.body.append(Footer())
}

export default initialLoad