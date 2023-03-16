import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Contact from "./pages/Contact"
import Checkout from "./pages/Checkout"
import Footer from "./components/Footer"
import { CartProvider } from "./CartContext"

function App() {
  return (
    <CartProvider>
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4">
        <Navbar />
        <main id="content" className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
