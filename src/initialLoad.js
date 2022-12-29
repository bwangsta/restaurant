import Navbar from "./components/Navbar"

function initialLoad() {
    const header = document.querySelector("header")
    header.append(Navbar())
}

export default initialLoad