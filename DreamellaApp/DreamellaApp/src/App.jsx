import {Routes, Route, Link, NavLink} from 'react-router-dom'
import "../src/App.css"
//Pages
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Checkout from './Pages/Checkout/Checkout'
import ProductsDetails from './Pages/ProductsDetails/ProductsDeatails'

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/perfume/:id' element={<ProductsDetails/>}/>
    <Route path='/cart/:id' element={<Cart/>}/>
    <Route path='checkout' element={<Checkout/>}/>
  </Routes>
  )
}

export default App
