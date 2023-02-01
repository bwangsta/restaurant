import './App.css'
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Contact from "./pages/Contact"
import Checkout from './pages/Checkout'
import Footer from "./components/Footer"
import { CartProvider } from './CartContext'

function App() {

  return (
    <CartProvider>
      <Navbar />
      <main id="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  )
}

export default App
