import './CSS/App.css'
import { Route, Routes } from 'react-router-dom'

//layout and Page importations
import Layout from './Pages/Layout'
import Home from './Pages/Home'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
