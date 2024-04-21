import { Route, Routes } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"

function App() {
  return (
    <div className=" min-h-screen bg-zinc-950 text-white w-full pb-14">
      <div>
        <NavBar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
