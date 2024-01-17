import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../../context/WishlistContext'

const Wishlist = () => {
  const { wish, deleteWish } = useContext(WishlistContext)
  return (
    <>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <h1>Wishlist</h1>
      {wish && wish.map(x =>
        <ul>
          <li><img src={x.image} alt="" /></li>
          <li>{x.title}</li>
          <li>{x.star}</li>
          <li>{x.heart}</li>
          <li>{x.text}</li>
          <li><button onClick={() => deleteWish(x)}>Delete</button></li>

        </ul>
      )}
    </>
  )
}

export default Wishlist
