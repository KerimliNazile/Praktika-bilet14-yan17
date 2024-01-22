import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { BasketContext } from '../../context/BasketContext'

const Basket = () => {

  const { basket, deleteBasket, increaseBasket, decreaseBasket } = useContext(BasketContext)
  return (
    <>
      <Helmet>
        <title>Basket</title>
      </Helmet>

      <h1>Basket</h1>
      <div className="BasketArea">
        {basket && basket.map(x =>

          <ul>
            <li><img src={x.image} alt="" /></li>
            <li>{x.text}</li>
            <li>{x.title}</li>
            <li>{x.star}</li>
            <li>{x.heart}</li>
            <li><button onClick={() => deleteBasket(x)}>delete</button></li>
            <li><button onClick={() => increaseBasket(x)}>+</button></li>
            <p>{x.count}</p>
            <li><button onClick={() => decreaseBasket(x)}>-</button></li>
          </ul>
        )}
      </div>

    </>
  )
}

export default Basket
