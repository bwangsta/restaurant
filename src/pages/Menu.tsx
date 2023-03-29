import React, { useState } from "react"
import MenuItem from "../components/MenuItem"
import Searchbar from "../components/Searchbar"
import menuData from "../data/menuData.json"

function Menu() {
  const [menuItems] = useState(menuData)
  const [query, setQuery] = useState("")

  const filteredItems = menuItems.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase())
  })

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
  }

  return (
    <section className="mx-auto max-w-4xl">
      <h1 className="text-3xl">Menu</h1>
      <Searchbar query={query} handleInputChange={handleInputChange} />
      {filteredItems.length === 0 ? (
        <p className="text-center">No results found</p>
      ) : (
        <div className="grid grid-cols-fluid justify-center gap-8">
          {filteredItems.map((item) => {
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
      )}
    </section>
  )
}

export default Menu
