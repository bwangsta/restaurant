function Tabs() {
    /*
    <header>
        <nav class="tabs">
            <button class="home-tab">Home</button>
            <button class="menu-tab">Menu</button>
            <button class="contact-tab">Contact Us</button>
        </nav>
    </header>
    */
    // create HTML elements
    const header = document.createElement("header")
    const nav = document.createElement("nav")
    const homeTab = document.createElement("button")
    const menuTab = document.createElement("button")
    const contactTab = document.createElement("button")

    // set text
    homeTab.textContent = "Home"
    menuTab.textContent = "Menu"
    contactTab.textContent = "Contact"

    // append child nodes to parent node
    nav.append(homeTab, menuTab, contactTab)
    header.append(nav)

    // add class to nodes
    homeTab.className = "home-tab"
    menuTab.className = "menu-tab"
    contactTab.className = "contact-tab"
    nav.className = "tabs"

    return header
}

export default Tabs