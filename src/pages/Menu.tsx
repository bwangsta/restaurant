import { ChangeEvent, useState } from "react"
import MenuItem from "../components/MenuItem"
import Searchbar from "../components/Searchbar"
import data from "../data"

function Menu() {
  const [items] = useState(data)
  const [query, setQuery] = useState("")

  const filteredItems = items.filter(item => {
    return item.name.toLowerCase().includes(query.toLowerCase())
  })

  const menuItem = filteredItems.map(item => {
    return <MenuItem key={item.id} img={item.img} name={item.name} price={item.price} />
  })

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setQuery(event.target.value)
  }

  return (
    <section className="menu">
      <h1 className="header">Menu</h1>
      <Searchbar query={query} handleInputChange={handleInputChange} />
      {filteredItems.length === 0 ?
        <p className="search-error">No results found</p>
        :
        <div className="menu-grid">
          {menuItem}
        </div>
      }
    </section>
  )
}

export default Menu