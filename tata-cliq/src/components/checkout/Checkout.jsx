import React from 'react'
import "../checkout/Checkout.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const [dropDown2, setDropDown2] = useState(false);
    const takeMeTo = useNavigate();


    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const handleCheckboxChange2 = () => {
        setIsChecked2(!isChecked2);
    }
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

    return (
        <div className='checkout-b'>
            <div id="Checkout-navbar">
                <div id='Checkout-navbar-align'>
                    <div id="Checkout-navbar-logo-holder" onClick={backHome}>
                        <img src="https://www.tatacliq.com/src/general/components/img/group.svg" />
                    </div>
                    <div id="Checkout-navbar-profile-icon" onMouseEnter={FallDown2} onMouseLeave={Fallup2}>
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
            <div id="Checkout-page-title">
                <div id="Checkout-page-title-aligner">
                    <div id="Checkout-page-title-name">My Bag</div>
                </div>
            </div>
            <div id="checkout-body">
                <div id='checkout-left-inner-body'>
                    <div id='checkout-left-inner-body-align'>
                        <div id='checkout-first-label'>
                            <div id='circle-for-numbering'>
                                <div id='circle-formed'>1</div>
                            </div>
                            <div>Add Shipping Address</div>
                            <div>Clear All</div>
                        </div>
                        <div id='input-area-parent'>
                            <div id='input-area-left'>

                                <div id='input-area-left-child-1' >
                                    <div className='first-input'>
                                        <div className="form">
                                            <input className="userDetails" name="task list" type="text" autocomplete="off" />
                                            <label for="task list" className="userDetails-label">
                                                <span className="input-name">First Name (required)*</span>
                                            </label>
                                        </div>
                                        <div className="form">
                                            <input className="userDetails" name="task list" type="text" autocomplete="off" />
                                            <label for="task list" className="userDetails-label">
                                                <span className="input-name">Last Name (required)*</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form100">
                                        <input className="userDetails" name="task list" type="text" autocomplete="off" />
                                        <label for="task list" className="userDetails-label">
                                            <span className="input-name">City/District (required)*</span>
                                        </label>
                                    </div>
                                    <div className="form100">
                                        <input className="userDetails" name="task list" type="text" autocomplete="off" />
                                        <label for="task list" className="userDetails-label">
                                            <span className="input-name">State (required)*</span>
                                        </label>
                                    </div>
                                    <div className='land-mark'>
                                        <p>Landmark</p>
                                        <i class="fa-solid fa-chevron-down"></i>
                                    </div>
                                </div>
                                <div id='input-area-left-chil-2'>
                                </div>
                            </div>
                            <div id='input-area-right'>
                                <div className="form100">
                                    <input className="userDetails" name="task list" type="text" autocomplete="off" />
                                    <label for="task list" className="userDetails-label">
                                        <span className="input-name">City/District (required)*</span>
                                    </label>
                                </div>
                                <div className="form100">
                                    <input className="userDetails" name="task list" type="text" autocomplete="off" />
                                    <label for="task list" className="userDetails-label">
                                        <span className="input-name">Address (required)*</span>
                                    </label>
                                </div>


                                <div className="form100">
                                    <input className="userDetails" name="task list" type="text" autocomplete="off" />
                                    <label for="task list" className="userDetails-label">
                                        <span className="input-name">Phone number 91+ (required)*</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='tick-box-parent'>
                            <div className='div-for-circle'>
                                <div className={`checkbox ${isChecked ? 'checked' : ''}`}
                                    onClick={handleCheckboxChange}></div>
                            </div>
                            <div className='div-for-circle'>
                                <div className={`checkbox ${isChecked2 ? 'checked' : ''}`}
                                    onClick={handleCheckboxChange2}></div>
                            </div>
                        </div>
                        <div className='cancelNsave'>
                            <div className='cancelNsave-align' >
                                <p>Cancel</p>
                                <button>save & Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='checkout-right-inner-body'>
                    <div id="cart-calcuation">
                        <div id="cart-bill-list">
                            <div className='cart-price-list'>
                                <p>Bag Total</p><p>₹4368.00</p>
                            </div>
                            <div className='cart-price-list'>
                                <p>Processing Fees</p><p className='text-color-green'>FREE</p>
                            </div>
                            <div className='cart-price-list'>
                                <p>Bag Subtotal</p> <p>₹4368.00</p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <hr />
                        <div id="checkout-total">
                            <div id="total-figure-checkout">
                                <p>Total payment</p>
                                <p>₹4368.00</p>
                            </div>
                        </div>
                    </div>
                    <div id="safe-pay">
                        <div><i class="fa-regular fa-id-badge"></i></div>
                        <div>Safe and secure payments. Easy returns. 100% Authentic products.</div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Checkout
