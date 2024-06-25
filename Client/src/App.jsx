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
      </Route>
    </Routes>
  )
}

export default App
