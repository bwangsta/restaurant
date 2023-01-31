import { ChangeEvent, useState } from "react"
import MenuItem from "../components/MenuItem"
import Searchbar from "../components/Searchbar"
import Cart from "../components/Cart"
import data from "../data"


function Menu() {
  const [items] = useState(data)
  const [cart, setCart] = useState(items)
  const [query, setQuery] = useState("")
  const [showCheckout, setShowCheckout] = useState(true)

  const filteredItems = items.filter(item => {
    return item.name.toLowerCase().includes(query.toLowerCase())
  })

  function addToCart(id: number) {
    // if item is already in cart, update the amount 
    // otherwise add item to cart
    setShowCheckout(true)
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 }
        }
        else {
          return item
        }
      })
    })
  }

  function removeFromCart(id: number) {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 }
        }
        else {
          return item
        }
      })
    })
  }

  function clearCart(id: number) {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          return { ...item, amount: 0 }
        }
        else {
          return item
        }
      })
    })
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
  }

  return (
    <section className="menu">
      <h1 className="header">Menu</h1>
      {showCheckout &&
        <Cart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
      }
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