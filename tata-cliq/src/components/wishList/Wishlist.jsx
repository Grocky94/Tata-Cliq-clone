import React from 'react'
import "./Wishlist.css"
import Navbar from '../Navbar'
import Footer from '../Footer'
const Wishlist = () => {
    return (
        <div id='wishlist-b'>
            <Navbar />
            <div id="Wishlist-page-title">
                <div id="Wishlist-page-title-aligner">
                    <div id="Wishlist-page-title-name">My Wishlist</div>
                </div>
            </div>
            <div id="wishlist-right-side">
                {/* first product  */}
                <div className="wishlist-product-cart">
                    <div className="wishlist-product-image-holder">
                        <div className='wishlist-heart-div'>
                            <img src="https://www.tatacliq.com/src/wishlist/components/img/Delete.svg" />
                        </div>
                        {/* main image  */}
                        <img src="https://img.tatacliq.com/images/i12/437Wx649H/MP000000016508880_437Wx649H_202307090312371.jpeg" alt="" />
                    </div>
                    <div className="product-description">
                        <button id='add-to-bag'>Add to Bag</button>
                        <p className='product-brand-name'>Hidesign</p>
                        <p className='material-info'>Hidesign Brown Leather Medium Laptop Messenger Bag</p>
                        <p className='item-pricing'>₹ <span className='bold'>13695</span></p>

                        <div className='align-para'>

                            <div className="star-rating">
                                <p></p>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <span className='count'>(1)</span>
                        </div>
                        <p className='red'>Limited stock!</p>
                    </div>
                </div>
                {/* Second product  */}
                <div className="wishlist-product-cart">
                    <div className="wishlist-product-image-holder">
                        <div className='wishlist-heart-div'>
                            <img src="https://www.tatacliq.com/src/wishlist/components/img/Delete.svg" />
                        </div>
                        {/* main image  */}
                        <img src="https://img.tatacliq.com/images/i7/437Wx649H/MP000000009261846_437Wx649H_202104072025511.jpeg" alt="" />
                    </div>
                    <div className="product-description">
                        <button id='add-to-bag'>Add to Bag</button>
                        <p className='product-brand-name'>Alvaro Castagnino</p>
                        <p className='material-info'>Alvaro Castagnino Silver Solid Cufflinks</p>
                        <p className='item-pricing'>₹ <span className='bold'>494</span></p>

                        <div className='align-para'>

                            <div className="star-rating">
                                <p></p>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <span className='count'>(1)</span>
                        </div>
                        <p className='red'>Limited stock!</p>
                    </div>
                </div>
                {/* third product  */}
                <div className="wishlist-product-cart">
                    <div className="wishlist-product-image-holder">
                        <div className='wishlist-heart-div'>
                            <img src="https://www.tatacliq.com/src/wishlist/components/img/Delete.svg" />
                        </div>
                        {/* main image  */}
                        <img src="https://img.tatacliq.com/images/i7/437Wx649H/MP000000009037525_437Wx649H_202103111207551.jpeg" alt="" />
                    </div>
                    <div className="product-description">
                        <button id='add-to-bag'>Add to Bag</button>
                        <p className='product-brand-name'>Bryan & Candy</p>
                        <p className='material-info'>Bryan & Candy New Tropical Flig + Naked sunshine Body Mist Combo - 500ml</p>
                        <p className='item-pricing'>₹ <span className='bold'>1200</span></p>

                        <div className='align-para'>

                            <div className="star-rating">
                                <p></p>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <span className='count'>(1)</span>
                        </div>
                        <p className='red'>Limited stock!</p>
                    </div>
                </div>
                {/* fourth product  */}
                <div className="wishlist-product-cart">
                    <div className="wishlist-product-image-holder">
                        <div className='wishlist-heart-div'>
                            <img src="https://www.tatacliq.com/src/wishlist/components/img/Delete.svg" />
                        </div>
                        {/* main image  */}
                        <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000017151817_437Wx649H_202304111142521.jpeg" alt="" />
                    </div>
                    <div className="product-description">
                        <button id='add-to-bag'>Add to Bag</button>
                        <p className='product-brand-name'>NewU</p>
                        <p className='material-info'>London Notes by NewU body Mist - Pack of 2</p>
                        <p className='item-pricing'>₹ <span className='bold'>672</span></p>

                        <div className='align-para'>

                            <div className="star-rating">
                                <p></p>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <span className='count'>(1)</span>
                        </div>
                        <p className='red'>Limited stock!</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Wishlist
