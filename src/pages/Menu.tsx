import tigerFishImg from "../assets/img/grilled-tiger-fish.webp"
import dragonBeardNoodlesImg from "../assets/img/dragon-beard-noodles.webp"
import mintyMeatRollsImg from "../assets/img/minty-meat-rolls.webp"

import MenuItem from "../components/MenuItem"

function Menu() {
  return (
    <section className="menu">
      <h1 className="header">Menu</h1>
      <div className="menu-grid">
        <MenuItem img={tigerFishImg} name="Grilled Tiger Fish" price={1250} />
        <MenuItem img={dragonBeardNoodlesImg} name="Dragon Beard Noodles" price={5000} />
        <MenuItem img={mintyMeatRollsImg} name="Minty Meat Rolls" price={5000} />
      </div>
    </section>
  )
}

export default Menu