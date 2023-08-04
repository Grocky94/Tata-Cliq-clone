import { useNavigate } from "react-router-dom";
import "./NewlyAddedProducts.css"
import React, { useEffect, useState } from "react"
import Navbar from "../Navbar";
const NewlyAddedProduct = () => {
    const [checkProduct, setcheckProduct] = useState(false);
    const [product, setProduct] = useState();

    const router = useNavigate();
    const sendData = (product) => {
        router(`/SingleProduct/${product?.id}`)
    }
    const user = JSON.parse(localStorage.getItem("Current-User"))

    useEffect(() => {
        const productfromLS = JSON.parse(localStorage.getItem("Products"));

        if (productfromLS) {
            setcheckProduct(true);
            setProduct(productfromLS);
        } else {
            setcheckProduct(false);
        }
    }, [])

    return (
        <>
            <Navbar/>
            {checkProduct ? <div id="all-product-screen-side" >
                {/* first product  */}
                {product && product.map((item) => (
                    <div id='all-product-product-cart' key={item.id}>
                        <div className="all-product-image-holder">
                            <div className='all-product-heart-div'>
                                <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" />
                            </div>
                            {/* main image  */}
                            <img src={item.image} alt="" />
                            <div className="all-product-shades">
                                <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" />
                            </div>
                        </div>
                        <div className="new-product-description">
                            <p className='product-brand-name'>{item.name}</p>
                            <p className='item-pricing'>₹ <span className='bold'>{item.price}</span></p>
                            <p>{item.category}</p>
                            {user?.role=="seller"?<button >Edit</button>:
                            <button onClick={() => sendData(item)}>ADD TO CART</button>}
                        </div>
                    </div>))}

            </div > : <div className='no-item'>NO Products</div>}
        </>
    )
}
export default NewlyAddedProduct