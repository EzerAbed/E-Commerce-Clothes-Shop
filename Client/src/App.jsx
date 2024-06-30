import './CSS/App.css'
import { Route, Routes } from 'react-router-dom'

//layout and Page importations
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import Login from './Pages/LogIn'
import Products from './Pages/Products'
import NotFound from './Pages/NotFound'
import Profile from './Pages/Profile'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import ProductDetails from './Pages/ProductDetails'
import CheckOut from './Pages/CheckOut'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/Login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products/details' element={<ProductDetails />} />
        <Route path='/checkout' element={<CheckOut />} />
      </Route>
    </Routes>
  )
}

export default App
