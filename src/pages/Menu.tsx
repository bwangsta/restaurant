import React, { useState } from "react"
import MenuItem from "../components/MenuItem"
import Searchbar from "../components/Searchbar"
import data from "../data"

function Menu() {
  const [menuItems] = useState(data)
  const [query, setQuery] = useState("")

  const filteredItems = menuItems.filter(item => {
    return item.name.toLowerCase().includes(query.toLowerCase())
  })

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
  }

  return (
    <section className="menu container">
      <h1 className="header">Menu</h1>
      <Searchbar query={query} handleInputChange={handleInputChange} />
      {filteredItems.length === 0 ?
        <p className="search-error">No results found</p>
        :
        <div className="menu-grid">
          {filteredItems.map(item => {
            return (
              <MenuItem
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
              />
            )
          })}
        </div>
      }
    </section>
  )
}

export default Menu