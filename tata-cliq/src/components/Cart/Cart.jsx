import React from 'react'
import "./Cart.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Cart = () => {
    const [dropDown2, setDropDown2] = useState(false);
    const takeMeTo = useNavigate();
    function FallDown2() {
        setDropDown2(true);
    }
    function Fallup2() {
        setDropDown2(false);
    }
    function backHome() {
        takeMeTo('/')
    }
    function Profile() {
        takeMeTo('/profile')
    }
    function MultipleProduct() {
        takeMeTo('/multiProductsMens')
    }
    function Checkout() {
        takeMeTo('/checkout')
    }
    return (
        <div id="cart-screen">
            <div id="cart-navbar">
                <div id='cart-navbar-align'>
                    <div id="cart-navbar-logo-holder" onClick={backHome}>
                        <img src="https://www.tatacliq.com/src/general/components/img/group.svg" />
                    </div>
                    <div id="cart-navbar-profile-icon" onMouseEnter={FallDown2} onMouseLeave={Fallup2}>
                        <div>
                            <img src="https://www.tatacliq.com/src/general/components/img/profile.png" />
                        </div>
                        <div>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                    {dropDown2 && <div id="cart-side" onMouseEnter={FallDown2} onMouseLeave={Fallup2}>
                        <div className="cart-side-list" onClick={Profile}>
                            <div className="cart-side-list-img-hold">
                                <img src="https://www.tatacliq.com/src/general/components/img/profile.png" />
                            </div>
                            <p>My Account</p>
                        </div>
                        <div className="cart-side-list">
                            <div className="cart-side-list-img-hold">
                                <img src="https://www.tatacliq.com/src/general/components/img/order-history.svg" />
                            </div>
                            <p>Order History</p>
                        </div>
                        <div className="cart-side-list">
                            <div className="cart-side-list-img-hold">
                                <img src="https://www.tatacliq.com/src/general/components/img/WL7.svg" />
                            </div>
                            <p>My Wishlist</p>
                        </div>
                        <div className="cart-side-list">
                            <div className="cart-side-list-img-hold">
                                <img src="https://www.tatacliq.com/src/account/components/img/alert.svg" />
                            </div>
                            <p>Alert & Coupon</p>
                        </div>
                        <div className="cart-side-list">
                            <div className="cart-side-list-img-hold">
                                <img src="https://www.tatacliq.com/src/account/components/img/giftCards.svg" />
                            </div>
                            <p>Gift Card</p>
                        </div>
                        <div className="cart-side-list">
                            <div className="cart-side-list-img-hold">
                                <img src="https://www.tatacliq.com/src/account/components/img/cliqCash.svg" />
                            </div>
                            <p>CliQ Cash</p>
                        </div>
                        <div className="cart-side-list">
                            <div className="cart-side-list-img-hold">
                                <img src="https://www.tatacliq.com/src/general/components/img/settingsblack.svg" />
                            </div>
                            <p>LogOut</p>
                        </div>
                    </div>}
                </div>
            </div>

            <div id="cart-page-title">
                <div id="cart-page-title-aligner">
                    <div id="cart-page-title-name">My Bag</div>
                    <div id="cart-pincode">
                        <div>Delhi, 110001</div>
                        <div><input placeholder='Change PIN code' /></div>
                    </div>
                </div>
            </div>
            <div id="cart-precaution-note">
                <div>Apply a relevant <span>coupon code</span> here to avail any additional discount. Applicable <span>cashback</span> if any will be credited to your account as per T&C</div>
            </div>
            <div id="cart-selected-product-aligner">
                <div id="cart-selected-product-left">
                    <div id="congo-coupon">
                        <i class="fa-solid fa-percent"></i>
                        <p> Congratulations NeuPass User!! Your order is eligible for FREE Shipping!</p>
                    </div>
                    {/* first item  */}
                    <div id="cart-selected-product-div">
                        <div id="cart-selected-product-div-img-holder">
                            <img src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016466505_437Wx649H_202302101135211.jpeg" />
                        </div>
                        <div id="cart-selected-product-div-describe">
                            <div id="cart-selected-product-name-n-delivery">
                                <div id="cart-selected-product-label">
                                    <p>Red Tape Men's White Running Shoes</p>
                                    <p><span>₹2069.00</span> <span> ₹6899.00</span> <span> ₹4830.00 Off</span></p>
                                    <div><span>Color:White</span><span>Size: UK/IND-10</span></div>
                                </div>
                                <div id="cart-selected-product-delivery-est">
                                    <div id="cart-selected-product-date">
                                        <i class="fa-solid fa-truck-fast"></i>
                                        Delivery by 14th Jul
                                    </div>
                                    <div> Free</div>
                                </div>
                            </div>
                            <div id="product-quantity-n-options">
                                <div id="product-quantity-container">Quantity: 1 <i class="fa-solid fa-chevron-down"></i></div>
                                <div id="wishlist-n-remove">
                                    <div id='cart-wishlist-contianer'>
                                        <i class="fa-regular fa-heart"></i>
                                        Save to wishlist
                                    </div>
                                    <div id="cart-remove">Remove</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* second item  */}
                    <div id="cart-selected-product-div">
                        <div id="cart-selected-product-div-img-holder">
                            <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015191643_437Wx649H_202211060046211.jpeg" />
                        </div>
                        <div id="cart-selected-product-div-describe">
                            <div id="cart-selected-product-name-n-delivery">
                                <div id="cart-selected-product-label">
                                    <p>U.S. Polo Assn. Coral Regular Fit Shirt</p>
                                    <p><span>₹2299.00</span> <span> </span> <span> </span></p>
                                    <div><span>Color:White</span><span>Size:  XXL</span></div>
                                </div>
                                <div id="cart-selected-product-delivery-est">
                                    <div id="cart-selected-product-date">
                                        <i class="fa-solid fa-truck-fast"></i>
                                        Delivery by 17th Jul
                                    </div>
                                    <div> Free</div>
                                </div>
                            </div>
                            <div id="product-quantity-n-options">
                                <div id="product-quantity-container">Quantity: 1 <i class="fa-solid fa-chevron-down"></i></div>
                                <div id="wishlist-n-remove">
                                    <div id='cart-wishlist-contianer'>
                                        <i class="fa-regular fa-heart"></i>
                                        Save to wishlist
                                    </div>
                                    <div id="cart-remove">Remove</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="continue-shop-parent">
                        <button id="continue-shop-btn" onClick={MultipleProduct}>Continue shopping</button>
                    </div>

                </div>
                <div id="cart-selected-product-right">
                    <div id="check-coupons">
                        <div><div> <img src="https://www.tatacliq.com/src/general/components/img/coupon.png" /></div> check for coupons</div>
                        <div><i class="fa-solid fa-chevron-right"></i></div>
                    </div>
                    <div id="cart-calcuation">
                        <div id="cart-bill-list">
                            <div className='cart-price-list'>
                                <p>Bag Total</p><p>₹9198.00</p>
                            </div>
                            <div className='cart-price-list'>
                                <p>Shipping Charge</p><p className='text-color-green'>FREE</p>
                            </div>
                            <div className='cart-price-list'>
                                <p>Bag Subtotal</p> <p>₹9198.00</p>
                            </div>
                            <div className='cart-price-list'>
                                <p>Product Discount(s)</p> <p>-₹4830.00</p>
                            </div>
                            <div className='cart-price-list'>
                                <p className='text-color-green'>You will save ₹4830.00 on this order</p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <hr />
                        <div id="cart-total">
                            <div id="total-figure">Total<br />
                                ₹ 4368</div>
                            <button id="Checkout-btn" onClick={Checkout}>Checkout</button>
                        </div>
                    </div>
                    <div id="safe-pay">
                        <div><i class="fa-regular fa-id-badge"></i></div>
                        <div>Safe and secure payments. Easy returns. 100% Authentic products.</div>
                    </div>
                </div>
            </div>
            <div id="cart-footer">

            </div>
        </div>
    )
}

export default Cart
