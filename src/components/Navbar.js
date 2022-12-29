function Navbar() {
    // create HTML elements
    const nav = document.createElement("nav")
    const ul = document.createElement("ul")
    const homeLi = document.createElement("li")
    const menuLi = document.createElement("li")
    const contactLi = document.createElement("li")

    // set text
    homeLi.textContent = "Home"
    menuLi.textContent = "Menu"
    contactLi.textContent = "Contact Us"

    // append child nodes to parent node
    ul.append(homeLi, menuLi, contactLi)
    nav.append(ul)

    // add class to nodes
    nav.className = "navbar"

    return nav
}

export default Navbar