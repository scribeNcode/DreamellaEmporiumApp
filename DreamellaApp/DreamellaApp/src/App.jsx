import {Routes, Route, Link, NavLink} from 'react-router-dom'
import "../src/App.css"
//Pages
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Checkout from './Pages/Checkout/Checkout'

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='checkout' element={<Checkout/>}/>
  </Routes>
  )
}

export default App
