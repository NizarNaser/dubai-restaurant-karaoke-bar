import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Cart from "./pages/Cart/Cart"
import Footer from "./components/footer/Footer"
import { useState } from "react"
import LoginPopup from "./components/loginPopup/LoginPopup"



function App() { 

  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<PlaceOrder/>}/>

      </Routes>
     
    </div> 
    <Footer/>
    </>
  )
}

export default App
