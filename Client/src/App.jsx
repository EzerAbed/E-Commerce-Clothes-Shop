import './CSS/App.css'
import { Route, Routes } from 'react-router-dom'

//layout and Page importations
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import SignUp from './Pages/User/SignUp'
import Login from './Pages/User/LogIn'
import Products from './Pages/Prod/Products'
import NotFound from './Pages/NotFound'
import Profile from './Pages/User/Profile'
import Wishlist from './Pages/Prod/Wishlist'
import Cart from './Pages/User/Cart'
import ProductDetails from './Pages/Prod/ProductDetails'
import CheckOut from './Pages/User/CheckOut'
import CheckOutLaydout from './Components/CheckOutLaydout'
import ShippingPage from './Pages/User/Shipping'
import Dashboard from './Pages/Admin/Dashboard'
import AdminLayout from './Components/AdminLayout'
import ProductAdminPage from './Pages/Admin/ProductAdminPage'

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
        <Route path='/checkout' element={<CheckOutLaydout/>}  >
          <Route index element={<CheckOut />} />
          <Route path='/checkout/shippingInfo' element={<ShippingPage />} />
        </Route>
      </Route>
      <Route path='/admin' element={<AdminLayout />}  >
        <Route index element={<Dashboard />} />
        <Route path='/admin/product' element={<ProductAdminPage/> } />
      </Route>
    </Routes>
  )
}

export default App
