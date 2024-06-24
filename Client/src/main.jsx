import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './CSS/index.css'
import { BrowserRouter } from 'react-router-dom'
import ContextManger from './ContextManger.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextManger>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </ContextManger>
  </React.StrictMode>,
)
