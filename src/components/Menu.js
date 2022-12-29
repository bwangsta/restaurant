import tigerFishImg from "../img/grilled-tiger-fish.webp"
import dragonBeardNoodlesImg from "../img/dragon-beard-noodles.webp"
import mintyMeatRollsImg from "../img/minty-meat-rolls.webp"

import MenuItem from "./MenuItem"

function Menu() {
    /*
    <section class="menu">
      <h1>Menu</h1>
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

    menuGrid.append(
        header,
        MenuItem(tigerFishImg, "Grilled Tiger Fish", 1250),
        MenuItem(dragonBeardNoodlesImg, "Dragon Beard Noodles", 5000),
        MenuItem(mintyMeatRollsImg, "Minty Meat Rolls", 5000)
    )
    menu.append(menuGrid)

    return menu
}

export default Menu