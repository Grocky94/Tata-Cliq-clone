import React, { useContext } from 'react'
import "./Cart.css"
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Navbar from '../Navbar';
import { AuthContext } from '../../context/AuthContext';
const Cart = () => {
    const [userCart, setUserCart] = useState([])
    const [finalPrice, setFinalPrice] = useState(0);
    const [showThankYou, setShowThankYou] = useState(false)
    const alluser = JSON.parse(localStorage.getItem("Users"));
    const user = JSON.parse(localStorage.getItem("Current-User"));
    const router = useNavigate();



    useEffect(() => {
        if (user?.email) {
            for (let i = 0; i < alluser.length; i++) {
                if (alluser[i].email === user.email && alluser[i].password === user.password) {
                    if (!alluser[i].cart == userCart) {
                        setUserCart(alluser[i].cart || []);
                    }
                    break;
                }
            }
        } else {
            toast.error('Login before viewing the cart.');
            router('/');
        }
    }, []);

    useEffect(() => {
        if (userCart.length) {
            var totalPrice = 0;
            for (var i = 0; i < userCart.length; i++) {
                totalPrice += parseInt(userCart[i].price)
                console.log(userCart, "-from cart useeffects")
                console.log(totalPrice)
            }
            setFinalPrice(totalPrice)
        }
    }, [userCart])


    const cartDeleting = (index) => {
        const allUser = JSON.parse(localStorage.getItem("Users"));
        const user = JSON.parse(localStorage.getItem("Current-User"));
        if (userCart.length) {
            for (let i = 0; i < allUser.length; i++) {
                if (allUser[i].email == user.email && allUser[i].password == user.password) {
                    // const product = allUser[i].slice();
                    allUser[i].cart.splice(index, 1);
                    setUserCart(allUser[i].cart);
                    localStorage.setItem("Users", JSON.stringify(allUser))
                    break
                }
            }

        }
    }

    function buyProducts() {
        const user = JSON.parse(localStorage.getItem("Current-User"));
        if (user?.email) {
            const allUsers = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
                    allUsers[i].cart = [];

                    localStorage.setItem("Users", JSON.stringify(allUsers))
                    break;
                }
            }
            setFinalPrice(0)
            setUserCart([]);
            toast.info("Product will deliver soon, Thank you for shopping.")
            setShowThankYou(true)
        }
    }
    // const [dropDown2, setDropDown2] = useState(false);
    // const takeMeTo = useNavigate();
    // function FallDown2() {
    //     setDropDown2(true);
    // }
    // function Fallup2() {
    //     setDropDown2(false);
    // }
    // function backHome() {
    //     takeMeTo('/')
    // }
    // function Profile() {
    //     takeMeTo('/profile')
    // }
    // function MultipleProduct() {
    //     takeMeTo('/multiProductsMens')
    // }
    return (
        <div id="cart-screen">
            <Navbar />
            {/* <div id="cart-navbar">
                <div id='cart-navbar-align'>
                    <div id="cart-navbar-logo-holder" onClick={backHome}>
                        <img src="https://www.tatacliq.com/src/general/components/img/group.svg" />
                    </div>
                    <div id="cart-navbar-profile-icon" >
                        <div>
                            <img src="https://www.tatacliq.com/src/general/components/img/profile.png" />
                        </div>
                        <div>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* {dropDown2 && <div id="cart-side" onMouseEnter={FallDown2} onMouseLeave={Fallup2}>
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
                */}

            <div id="cart-page-title">
                <div id="cart-page-title-aligner">
                    <div id="cart-page-title-name">My Bag</div>
                    <div id="cart-pincode">
                        <div>Vashi, 400700</div>
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
                    {userCart.map((prop, index) => <div id="cart-selected-product-div" key={prop.id}>
                        <div id="cart-selected-product-div-img-holder">
                            <img src={prop.image} />
                        </div>
                        <div id="cart-selected-product-div-describe">
                            <div id="cart-selected-product-name-n-delivery">
                                <div id="cart-selected-product-label">
                                    <p>{prop.name}</p>
                                    <p>₹ {prop.price}</p>
                                    <div><span>Color</span><span>Category:~{prop.category}</span></div>
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
                                    <div id="cart-remove" onClick={() => cartDeleting(index)}>Remove</div>
                                </div>
                            </div>
                        </div>
                    </div>)}
                    {showThankYou && <div className="thankyou">Thank you</div>}

                </div>
                <div id="cart-selected-product-right">
                    <div id="check-coupons">
                        <div><div> <img src="https://www.tatacliq.com/src/general/components/img/coupon.png" /></div> check for coupons</div>
                        <div><i class="fa-solid fa-chevron-right"></i></div>
                    </div>
                    <div id="cart-calcuation">
                        <div id="cart-bill-list">
                            <div className='cart-price-list'>
                                <p>Bag Total</p><p>₹{finalPrice}</p>
                            </div>
                            <div className='cart-price-list'>
                                <p>Shipping Charge</p><p className='text-color-green'>FREE</p>
                            </div>
                            <div className='cart-price-list'>
                                <p>Bag Subtotal</p> <p>₹{finalPrice}</p>
                            </div>
                            <div className='cart-price-list'>
                                <p>Product Discount(s)</p> <p>-₹N/A</p>
                            </div>
                            <div className='cart-price-list'>
                                <p className='text-color-green'>You will save Shipping Charge on this order</p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <hr />
                        <div id="cart-total">
                            <div id="total-figure">Total<br />
                                ₹ {finalPrice}</div>
                            <button id="Checkout-btn" onClick={buyProducts}>Checkout</button>
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
