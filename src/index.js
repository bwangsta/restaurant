import "./style.css"
import initialLoad from "./initialLoad"
import render from "./render"
import Home from "./components/Home"
import Menu from "./components/Menu"
import Contact from "./components/Contact"

initialLoad()

const main = document.querySelector("main")
const homeTab = document.querySelector(".home-tab")
const menuTab = document.querySelector(".menu-tab")
const contactTab = document.querySelector(".contact-tab")

homeTab.addEventListener("click", () => {
    render()
    main.append(Home())
})

menuTab.addEventListener("click", () => {
    render()
    main.append(Menu())
})

contactTab.addEventListener("click", () => {
    render()
    main.append(Contact())
})