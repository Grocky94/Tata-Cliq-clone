import "./NewlyAddedProducts.css"
import React from "react"
const NewlyAddedProduct = () => {
    return (
        <div id="all-product-screen-side" >
            {/* first product  */}
            <div id='all-product-product-cart'>
                <div className="all-product-image-holder">
                    <div className='all-product-heart-div'>
                        <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" />
                    </div>
                    {/* main image  */}
                    <img src="" alt="" />
                    <div className="all-product-shades">
                        <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" />
                    </div>
                </div>
                <div className="new-product-description">
                    <p className='product-brand-name'></p>
                    <p className='item-pricing'>₹ <span className='bold'></span></p>
                </div>
            </div>

        </div >
    )
}
export default NewlyAddedProduct