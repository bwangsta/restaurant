import tigerFishImg from "../assets/img/grilled-tiger-fish.webp"
import dragonBeardNoodlesImg from "../assets/img/dragon-beard-noodles.webp"
import mintyMeatRollsImg from "../assets/img/minty-meat-rolls.webp"

import MenuItem from "./MenuItem"

function Menu() {
    /*
    <section class="menu">
      <h1 class="header">Menu</h1>
      <div class="menu-grid">
        <MenuItem />
      </div>
    </section>
    */
    const menu = document.createElement("section")
    const header = document.createElement("h1")
    const menuGrid = document.createElement("div")

    header.textContent = "Menu"

    menu.className = "menu"
    menuGrid.className = "menu-grid"
    header.className = "header"

    menuGrid.append(
        MenuItem(tigerFishImg, "Grilled Tiger Fish", 1250),
        MenuItem(dragonBeardNoodlesImg, "Dragon Beard Noodles", 5000),
        MenuItem(mintyMeatRollsImg, "Minty Meat Rolls", 5000)
    )
    menu.append(header, menuGrid)

    return menu
}

export default Menu