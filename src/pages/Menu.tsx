import MenuItem from "../components/MenuItem"
import data from "../data"

function Menu() {
  const menuItem = data.map(item => {
    return <MenuItem key={item.id} img={item.img} name={item.name} price={item.price} />
  })

  return (
    <section className="menu">
      <h1 className="header">Menu</h1>
      <div className="menu-grid">
        {menuItem}
      </div>
    </section>
  )
}

export default Menu