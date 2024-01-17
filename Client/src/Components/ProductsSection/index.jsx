import React, { useEffect, useState } from 'react'
import Card from '../Card'
import './index.scss'
const Products = () => {
    const [product, setProduct] = useState()
    async function getProducts() {
        const data = await fetch("http://localhost:5000/sets")
        const res = await data.json()
        console.log(res);
        setProduct(res)
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
            <section id='Products'>
                <div className="ProductsArea">
                    <div className="ProductTitle">
                        <h1>Our Products</h1>
                    </div>
                    <div className="ProductCard">
                        {product && product.map((item) => (

                            <div className="Card">
                                <Card key={item._id} id={item._id} image={item.image} text={item.text} star={item.star} heart={item.heart} title={item.title} product={item}/>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    )
}

export default Products
