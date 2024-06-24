import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './CSS/index.css'
import { BrowserRouter } from 'react-router-dom'
import ThemeManger from './Context Manger/Theme.jsx'
import UserManger from './Context Manger/User.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeManger>
      <UserManger>
        <BrowserRouter >
          <App />
        </BrowserRouter>
      </UserManger>
    </ThemeManger>
  </React.StrictMode>,
)
