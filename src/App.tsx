import './App.css'
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

function App() {

    return (
        <main className="App">
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </main>
    )
}

export default App