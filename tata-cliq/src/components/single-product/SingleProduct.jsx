import React from 'react'
import "./SingleProduct.css"
import Footer from "../Footer"
import Navbar from "../Navbar"
const SingleProduct = () => {
    return (
        <div>
            <Navbar/>
            <div id="single-product-screen">
                <div id="single-product-screen-align">
                    <div id="single-product-leftSide">
                        <div id="cutshort-leftside">
                            <div id="single-product-larger-leftSide-img-frame">
                                <div><img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016645596_437Wx649H_202302241106111.jpeg"/></div>
                                <div><img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016645596_437Wx649H_202302241106132.jpeg"/></div>
                            </div>
                            <div id="single-product-leftSide-img-frame">
                                <div><img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016645596_437Wx649H_202302241106083.jpeg"/></div>
                                <div><img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016645596_437Wx649H_202302241106154.jpeg"/></div>
                                <div><img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016645596_437Wx649H_202302241106105.jpeg"/></div>
                            </div>
                        </div>
                    </div>
                    <div id="single-product-rightSide">
                        <div id="popularity-box">
                            <i class="fa-regular fa-heart"></i>
                            <p>Popular: Recently wishlisted 56 times</p>
                        </div>
                        <div className='product-detailsNDescription'>
                            <p className='given-brand-name'>Puma</p>
                            <p>Puma ESS+ Black Cotton Regular Fit Printed T-Shirt</p>
                            <p><span>₹ 739</span><span className='colorItoff'>MRP: ₹1999</span><span className='colorItGreen'>63% off</span></p>
                            <p className='smallText'>inclusive of all taxes</p>
                            <p className='smallText-red'>Use MENSEOSS coupon to get 10% off on cart value 1999/- and above.</p>
                            <p className='smallText-red'>Share your opinion</p>
                        </div>
                        <div className="size-chart-div">
                            <div className='size-title'><span>Select Size</span><span className='colorItRed'>Size Guide</span></div>
                            <div className='size-selector'>
                                <div className='size-selector-card'>XXS</div>
                                <div className='size-selector-card'>XS</div>
                                <div className='size-selector-card'>S</div>
                                <div className='size-selector-card'>M</div>
                                <div className='size-selector-card'>L</div>
                                <div className='size-selector-card'>XL</div>
                                <div className='size-selector-card'>XXL</div>
                                <div className='size-selector-card'>3XL</div>
                                <div className='size-selector-card'>4XL</div>
                            </div>
                            <p>Size out of stock? <span className='colorItRed'>View Similar</span></p>,<br />
                            <p>Model is 6'0"/185 cms and is wearing size M<br />
                                Cotton, Machine Wash</p>
                        </div>
                        <div className='avalible-offers'>
                            <p className='avalible-offers-title'>Available offers</p>
                            <br />
                            <div className='bank-list'>
                                <div className='bank-logo-image-holder'>
                                    <div className='bank-logo-image-holder-aligner'>
                                        <img src="https://assets.tatacliq.com/medias/sys_master/images/27678831411230.png" />
                                    </div>
                                </div>
                                <div className='bank-details'>
                                    <p>10% Instant Discount on Kotak Bank Credit Cards only.</p>
                                    <p>Min Purchase: ₹2500 | Max Discount: ₹1000 more</p>
                                </div>
                            </div>
                            <div className='bank-list'>
                                <div className='bank-logo-image-holder'>
                                    <div className='bank-logo-image-holder-aligner'>
                                        <img src="https://assets.tatacliq.com/medias/sys_master/images/27678831280158.png" />
                                    </div>
                                </div>
                                <div className='bank-details'>
                                    <p>15% off on ICICI Credit Cards.</p>
                                    <p>Use Code: ICICIWEEKEND | Min Purchase: ₹1500 more</p>
                                </div>
                            </div>
                            <div className='bank-list'>
                                <div className='bank-logo-image-holder'>
                                    <div className='bank-logo-image-holder-aligner'>
                                        <img src="https://assets.tatacliq.com/medias/sys_master/images/27678831280158.png" />
                                    </div>
                                </div>
                                <div className='bank-details'>
                                    <p>15% off on ICICI Netbanking</p>
                                    <p>Use Code: ICICINB | Min Purchase: ₹2000 more</p>
                                </div>
                            </div>
                            <div className='bank-list'>
                                <div className='bank-logo-image-holder'>
                                    <div className='bank-logo-image-holder-aligner'>
                                        <img src="https://assets.tatacliq.com/medias/sys_master/images/27678831280158.png" />
                                    </div>
                                </div>
                                <div className='bank-details'>
                                    <p>Use Code CLIQ500 get 10% off on min. Purchase of Rs.2500 | Max discount 500</p>
                                    <p>Use Code: ICICINB | Min Purchase: ₹2000 more</p>
                                </div>
                            </div>
                            <p className='colorItRed'>See 5 more offers</p>
                        </div>
                        <div id="shiping">
                            <p className='ship-title'>Ship To</p>
                            <div id="pin-code">
                                <p>Delhi, 110001 </p>
                                <p className='colorItRed'>Change Pincode</p>
                            </div>
                            <br />
                            <div className="ship-details">
                                <div className='ship-details-image-holder'>
                                    <div className='ship-details-image-holder-aligner'>
                                        <img src="https://www.tatacliq.com/src/general/components/img/deliveryIcon.svg" />
                                    </div>
                                </div>
                                <p>Delivery by <span className='boldIt'>13th Jul</span></p>
                            </div>
                            <div className="ship-details">
                                <div className='ship-details-image-holder'>
                                    <div className='ship-details-image-holder-aligner'>
                                        <img src="https://www.tatacliq.com/src/general/components/img/cod.svg" />
                                    </div>
                                </div>
                                <p className='boldIt'>Cash on Delivery | <span className='colorItGreen'> Available</span></p>
                            </div>
                            <div className="ship-details">
                                <div className='ship-details-image-holder'>
                                    <div className='ship-details-image-holder-aligner'>
                                        <img src="https://www.tatacliq.com/src/general/components/img/returnReplacementIcon.svg" />
                                    </div>
                                </div>
                                <p className='boldIt'>30 Days Easy Return | <span className='colorItRed'> Know More</span></p>
                            </div>
                            <div id="sold-by">
                                <p className='boldIt'>Sold by 1 Puma Sports India Pvt Ltd  </p>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                        <div id="product-more-info">
                            <div className='product-more-info-title'>
                                <p className='boldIt'>Product Details</p>
                                <i class="fa-solid fa-chevron-down"></i>
                            </div>
                            <p>Amaze everyone by sporting this black regular fit t-shirt from Puma. Tailored to sartorial perfection from premium quality fabric, it assures a soft and soothing touch</p>
                            <div id="grid-for-size">
                                <div className='child-of-grid-size'>
                                    <div className='grandchild-grid-size'><p>Fit</p></div>
                                    <div className='grandchild-grid-size'><p>Pattern</p></div>
                                </div>
                                <div className='child-of-grid-size'>
                                    <div className='grandchild-grid-size'><p>Regular Fit</p></div>
                                    <div className='grandchild-grid-size'><p>Printed</p></div>
                                </div>
                            </div>
                            <div id="tailoring">
                                <div id="tailor-leftSide">
                                    <div className="tailor-image-hold">
                                        <img src="https://www.tatacliq.com/src/pdp/components/img/moreProduct.svg" />
                                    </div>
                                    <div className='tailor-leftSide-words'>
                                        <p className='boldIt'>More Product Information</p>
                                        <p>Manufacturing, Packing & import info</p>
                                    </div>
                                </div>
                                <div id="tailor-rightSide">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                        <div id="customer-though">
                            <p className='boldIt'>Customers thought the product's fit was</p>
                            <br />
                            <div className="progress-bars">
                                <div className='progress-bars-category' >
                                    <div className='label-thought'>
                                        <p className='boldIt'>As expected (87%)</p>
                                    </div>
                                    <div className='div-scale'>
                                        <div className='div-scale-progress-1'></div>
                                    </div>
                                </div>
                                <div className='progress-bars-category' >
                                    <div className='label-thought'>
                                        <p>Too loose (13%)</p>
                                    </div>
                                    <div className='div-scale'>
                                        <div className='div-scale-progress-2'></div>
                                    </div>
                                </div>
                                <div className='progress-bars-category' >
                                    <div className='label-thought'>
                                        <p>Too Tight (0%)</p>
                                    </div>
                                    <div className='div-scale'>
                                        <div className='div-scale-progress-3'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="from-Brand">
                            <p>From the brand</p>
                            <div id="pink-box-from-brand">
                                <div id="inside-pink-box">
                                    <div id="inside-pink-box-title-n-logo">
                                        <div id="from-Brand-img-hold">
                                            <img src="https://assets.tatacliq.com/medias/sys_master/images/31345385275422.png" />
                                        </div>
                                        <p className='boldIt'>Puma</p>
                                    </div>
                                    <p>Comfort and style are synonymous with Puma, making it one of the leading brands of apparel and sports shoes in the world. You can take your pick from the Puma apparels, footwear and accessories collection available here on Tata Cliq.</p>
                                    <button id="visit-store">visit store</button>
                                </div>
                            </div>
                        </div>
                        <div id="buy-n-bag">
                            <div id="share-div">
                                <img src='https://www.tatacliq.com/src/pdp/components/img/new-share-icon.svg' />
                            </div>
                            <div id="like-div">
                                <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" />
                            </div>
                            <button id="buy-now-div">Buy Now</button>
                            <button id="add-to-bag-div">Add To Bag</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="style-with">
                <div id="style-with-align">
                    <div id="style-with-title">
                        <div id="first-child-style-with">
                            <p>Style It With</p>
                        </div>
                        <div id="second-child-style-with">
                            <div>Recommended Combos</div>
                            <div>Bottom Wear</div>
                            <div>Outer Wear</div>
                            <div>Foot Wear</div>
                            <div>Bags & Wallets</div>
                        </div>
                    </div>
                    <div id="recommended-pro">
                        {/* first product  */}
                        <div className="recommended-pro-cart">
                            <div className="recommended-pro-image-holder">
                                <img src="https://img.tatacliq.com/images/i7/252Wx374H/MP000000010977221_252Wx374H_202110211435581.jpeg" alt="" />
                            </div>
                            <div className="recommended-pro-description">
                                <p className='recommended-pro-brand-name'>Samsung</p>
                                <p className='material-info'>Samsung Galaxy Watch4 SM-R870NZKAINU 44mm..</p>
                                <p className='item-pricing'>₹ <span className='bold'>12400</span> <span className='line-over'>₹29999</span> <span className='colorItGreen'>59 % off</span></p>
                                <div className='align-para'><div className="star-rating"><p>2.8</p><i class="fa-solid fa-star"></i></div><span className='count' >(5)</span></div>
                            </div>
                            <button className='recommended-btn'>Add To Bag</button>
                        </div>
                        {/* second product  */}
                        <div className="recommended-pro-cart">
                            <div className="recommended-pro-image-holder">
                                <img src="https://img.tatacliq.com/images/i10/252Wx374H/MP000000016239600_252Wx374H_202303031238191.jpeg" alt="" />
                            </div>
                            <div className="recommended-pro-description">
                                <p className='recommended-pro-brand-name'>Samsung</p>
                                <p className='material-info'>Samsung Galaxy Buds 2, Active Noise Cancellation Earbuds...</p>
                                <p className='item-pricing'>₹ <span className='bold'>5685</span> <span className='line-over'>₹13990</span> <span className='colorItGreen'>59 % off</span></p>
                                <div className='align-para'><div className="star-rating"><p>4.4</p><i class="fa-solid fa-star"></i></div><span className='count' >(36)</span></div>
                            </div>
                            <button className='recommended-btn'>Add To Bag</button>
                        </div>
                        {/* third product  */}
                        <div className="recommended-pro-cart">
                            <div className="recommended-pro-image-holder">
                                <img src="https://img.tatacliq.com/images/i7/252Wx374H/MP000000007140590_252Wx374H_202108032042161.jpeg" alt="" />
                            </div>
                            <div className="recommended-pro-description">
                                <p className='recommended-pro-brand-name'>Apple</p>
                                <p className='material-info'>Apple 1m USB to Lightning Cable (MXLY2ZM/A, White)</p>
                                <p className='item-pricing'>₹ <span className='bold'>1679</span> <span className='line-over'>₹1800</span> <span className='colorItGreen'>7 % off</span></p>
                                <div className='align-para'><div className="star-rating"><p>4.4</p><i class="fa-solid fa-star"></i></div><span className='count' >(434)</span></div>
                            </div>
                            <button className='recommended-btn'>Add To Bag</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="shop-more">
                <div id="shop-more-align">
                    <div id="shop-more-title">
                        <div></div>
                        <div>Shop More</div>
                        <div></div>
                    </div>
                    <div id="shop-more-cart">
                        <div id="shop-more-cart-rows">
                            <p className='boldIt'>More T-shirts & Polos By Puma  </p>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div id="shop-more-cart-rows">
                            <p className='boldIt'>More Black T-shirt & Polos  </p>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div id="shop-more-cart-rows">
                            <p className='boldIt'>More T-shirt & Polos under ₹500  </p>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                    <div id="similar-product-like-puma">
                        <p>More from <span className='boldIt'>Puma</span></p>
                        <button>+ Follow Brand</button>
                    </div>
                    <div id="similar-product-like-puma-showcase">
                        <div className="similar-suggestion-pro-cart">
                            <div className="recommended-pro-image-holder">
                                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017554565_437Wx649H_202305151656271.jpeg" alt="" />
                            </div>
                            <div className="recommended-pro-description">
                                <p className='material-info'>Puma Black Slim Fit Printed Cotton Crew T-...</p>
                                <p className='item-pricing'>₹ <span className='bold'>749</span> <span className='line-over'>₹1599</span> <span className='colorItGreen'>53 % off</span></p>
                                <div className='align-para'><div className="star-rating"><p>4</p><i class="fa-solid fa-star"></i></div><span className='count' >(1)</span></div>
                            </div>
                        </div>
                        <div className="similar-suggestion-pro-cart">
                            <div className="recommended-pro-image-holder">
                                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017553767_437Wx649H_202305151626221.jpeg" alt="" />
                            </div>
                            <div className="recommended-pro-description">
                                <p className='material-info'>Puma x 1DER Back Slim Fit Printed Cotton Crew..</p>
                                <p className='item-pricing'>₹ <span className='bold'>769</span> <span className='line-over'>₹1799</span> <span className='colorItGreen'>57 % off</span></p>

                            </div>
                        </div>
                        <div className="similar-suggestion-pro-cart">
                            <div className="recommended-pro-image-holder">
                                <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000017311759_437Wx649H_202304210613231.jpeg" alt="" />
                            </div>
                            <div className="recommended-pro-description">
                                <p className='material-info'>Puma Black Cotton Regular Fit Printed T-..</p>
                                <p className='item-pricing'>₹ <span className='bold'>999</span> <span className='line-over'>₹1999</span> <span className='colorItGreen'>50 % off</span></p>

                            </div>
                        </div>
                        <div className="similar-suggestion-pro-cart">
                            <div className="recommended-pro-image-holder">
                                <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016728967_437Wx649H_202303181356291.jpeg" alt="" />
                            </div>
                            <div className="recommended-pro-description">
                                <p className='material-info'>Puma Crying Cat Black Cotton Regular Fit...</p>
                                <p className='item-pricing'>₹ <span className='bold'>839</span> <span className='line-over'>₹1999</span> <span className='colorItGreen'>58 % off</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default SingleProduct
