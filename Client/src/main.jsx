import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import WishlistProvider from './context/WishlistContext.jsx'
import BasketProvider from './context/BasketContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BasketProvider>
        <WishlistProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </WishlistProvider>
      </BasketProvider>


    </HelmetProvider>


  </React.StrictMode>,
)
