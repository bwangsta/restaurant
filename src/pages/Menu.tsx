import { ChangeEvent, useReducer, useState } from "react"
import MenuItem from "../components/MenuItem"
import Searchbar from "../components/Searchbar"
import Cart from "../components/Cart"
import data from "../data"
import cartReducer from "../cartReducer"


function Menu() {
  const [items] = useState(data)
  const [cart, dispatch] = useReducer(cartReducer, items)
  const [query, setQuery] = useState("")

  const filteredItems = items.filter(item => {
    return item.name.toLowerCase().includes(query.toLowerCase())
  })

  function addToCart(id: number) {
    dispatch({
      type: "add",
      id: id,
    })
  }

  function removeFromCart(id: number) {
    dispatch({
      type: "remove",
      id: id,
    })
  }

  function clearCart(id: number) {
    dispatch({
      type: "clear",
      id: id,
    })
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
  }

  return (
    <section className="menu">
      <h1 className="header">Menu</h1>
      <Cart
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
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
                addToCart={addToCart}
              />
            )
          })}
        </div>
      }
    </section>
  )
}

export default Menu