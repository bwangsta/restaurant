import guobaLogo from "../assets/img/guoba-logo.svg"

function Tabs() {
    /*
    <header>
        <nav class="tabs">
            <button class="home-tab"><img src="../src/assets/img/guoba-logo.svg" alt="Wanmin Restaurant Logo" class="logo"></button>
            <button class="menu-tab">Menu</button>
            <button class="contact-tab">Contact Us</button>
        </nav>
    </header>
    */
    // create HTML elements
    const header = document.createElement("header")
    const nav = document.createElement("nav")
    const homeTab = document.createElement("button")
    const logo = document.createElement("img")
    const menuTab = document.createElement("button")
    const contactTab = document.createElement("button")

    // set text
    menuTab.textContent = "Menu"
    contactTab.textContent = "Contact"

    // set attributes
    logo.src = guobaLogo
    logo.alt = "Wanmin Restaurant Logo"

    // add class to nodes
    homeTab.className = "home-tab"
    menuTab.className = "menu-tab"
    contactTab.className = "contact-tab"
    nav.className = "tabs"
    logo.className = "logo"

    // append child nodes to parent node
    homeTab.append(logo)
    nav.append(homeTab, menuTab, contactTab)
    header.append(nav)

    return header
}

export default Tabs