import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './Layout/Main'
import AddPage from './Pages/AddPage'
import Basket from './Pages/Basket'
import Detail from './Pages/DetailPage'
import Home from './Pages/HomePage'
import Wishlist from './Pages/WishlistPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/add' element={<AddPage />}></Route>
          <Route path='/wishlist' element={<Wishlist />}></Route>
          <Route path='/basket' element={<Basket />}></Route>
          <Route path='/:id' element={<Detail />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
