import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Contact from "./pages/Contact"
import Checkout from "./pages/Checkout"
import Footer from "./components/Footer"
import { CartProvider } from "./CartContext"
import Sidebar from "./components/Sidebar"
import { useState } from "react"

function App() {
  const [isVisible, setVisibility] = useState(false)

  function handleToggle() {
    setVisibility((prevIsVisible) => !prevIsVisible)
  }

  return (
    <CartProvider>
      <div className="drawer drawer-end">
        <input
          id="sidebar"
          type="checkbox"
          className="drawer-toggle"
          checked={isVisible}
          onChange={handleToggle}
        />
        <div className="drawer-content flex flex-col px-4">
          <Navbar />
          <main className="my-4 flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Sidebar handleToggle={handleToggle} />
      </div>
    </CartProvider>
  )
}

export default App
