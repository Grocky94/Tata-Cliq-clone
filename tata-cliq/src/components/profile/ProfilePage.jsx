import React from 'react'
import './ProfilePage.css'
const ProfilePage = () => {
    return (
        <div id="profile-screen">
            <div id="profile-screen-align">
                <div id="menu-side">
                    <div id="menu-side-title">Menu</div>
                    <div className="menu-side-nav-list">
                        <div className='menu-side-nav-list-logo'><img src="https://www.tatacliq.com/src/general/components/img/WL5.svg" /></div>
                        <div className='menu-side-nav-list-label'>My Wishlist</div>
                    </div>
                    <div className="menu-side-nav-list">
                        <div className='menu-side-nav-list-logo'><img src="https://www.tatacliq.com/src/general/components/img/order-history.svg" /></div>
                        <div className='menu-side-nav-list-label'>Order History</div>
                    </div>
                    <div className="menu-side-nav-list">
                        <div className='menu-side-nav-list-logo'>
                            <img src='https://www.tatacliq.com/src/account/components/img/Neupass_monochrome.svg' />
                        </div>
                        <div className='menu-side-nav-list-label'>NeuPass</div>
                    </div>
                    <div className="menu-side-nav-list">
                        <div className='menu-side-nav-list-logo'><img src="https://www.tatacliq.com/src/account/components/img/addressbook.svg" /></div>
                        <div className='menu-side-nav-list-label'>Address Book</div>
                    </div>
                    <div className="menu-side-nav-list">
                        <div className='menu-side-nav-list-logo'><img src="https://www.tatacliq.com/src/account/components/img/brand.svg" /></div>
                        <div className='menu-side-nav-list-label'>Brands</div>
                    </div>
                    <div className="menu-side-nav-list">
                        <div className='menu-side-nav-list-logo'><img src="https://www.tatacliq.com/src/account/components/img/card.svg" /></div>
                        <div className='menu-side-nav-list-label'>Saved Payments</div>
                    </div>
                    <div className="menu-side-nav-list">
                        <div className='menu-side-nav-list-logo'><img src="https://www.tatacliq.com/src/account/components/img/alert.svg" /></div>
                        <div className='menu-side-nav-list-label'>Alerts & Coupons</div>
                    </div>
                    <div className="menu-side-nav-list">
                        <div className='menu-side-nav-list-logo'><img src="https://www.tatacliq.com/src/account/components/img/giftCards.svg" /></div>
                        <div className='menu-side-nav-list-label'>Gift Card</div>
                    </div>
                    <div className="menu-side-nav-list">
                        <div className='menu-side-nav-list-logo'><img src="https://www.tatacliq.com/src/account/components/img/cliqCash.svg" /></div>
                        <div className='menu-side-nav-list-label'>CliQ Cash</div>
                    </div>
                    <div className="menu-side-nav-list">
                        <div className='menu-side-nav-list-logo'><img src="https://www.tatacliq.com/src/account/components/img/addressbook.svg" /></div>
                        <div className='menu-side-nav-list-label'>Manage Notifications</div>
                    </div>
                    <div className="menu-side-nav-list">
                        <div className='menu-side-nav-list-logo'><img src="https://www.tatacliq.com/src/account/components/img/settingsRed.svg" /></div>
                        <div className='menu-side-nav-list-label'>Profile</div>
                    </div>
                </div>
                <div id="general-info">
                    <div id="general-info-head">General Infomation</div>
                    <div className="general-info-details">
                        <div className="general-info-headers">
                            <p>Basic Details</p>
                            <p>Add</p>
                        </div>
                        <div className="general-info-form">
                            <div className='general-info-form-fills' >
                                <span>First Name</span>
                                <input placeholder='First Name'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="icon-email-id"></div>
            </div>

        </div>
    )
}

export default ProfilePage
