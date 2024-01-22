import React, { createContext } from 'react'
import useLocalStorage from '../Hooks/useLocalStorage'


export const BasketContext = createContext()
const BasketProvider = ({ children }) => {

    const [basket, setBasket] = useLocalStorage("basket")
    //add
    function addBasket(product) {
        const existBasket = basket.findIndex(x => x._id === product._id)
        if (existBasket === -1) {
            setBasket([...basket, { ...product, count: 1 }])
        } else {
            basket[existBasket].count++
        }
    }
    //delete
    function deleteBasket(product) {
        const deletedBasket = basket.filter(x => x._id !== product._id)
        setBasket(deletedBasket)
    }

    // increase
    function increaseBasket(product) {
        const existBasket = basket.findIndex(x => x._id === product._id)
        if (existBasket !== -1) {
            basket[existBasket].count++
            setBasket([...basket])

        }
    }
    //decrease
    function decreaseBasket(product) {
        const existBasket = basket.find(x => x._id === product._id)
        if (existBasket && existBasket.count > 1) {
            existBasket.count--
            setBasket([...basket])
            return


        } else {
            setBasket(basket.filter((x) => x._id !== product._id))
            return
        }
    }


    const data = {
        basket, setBasket, addBasket, deleteBasket, increaseBasket, decreaseBasket
    }

    return (
        <>
            <BasketContext.Provider value={data}>
                {children}
            </BasketContext.Provider>
        </>
    )
}

export default BasketProvider