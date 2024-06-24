import './CSS/App.css'
import { Route, Routes } from 'react-router-dom'

//layout and Page importations
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/Signup' element={<SignUp />} />
      </Route>
    </Routes>
  )
}

export default App
