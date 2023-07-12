import React from 'react'
import './ProfilePage.css'
import Navbar from '../Navbar'
import Footer from "../Footer"
const ProfilePage = () => {
   
    return (
        <>
            <Navbar />
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
                                    <span>
                                        <input placeholder='First Name' />
                                    </span>
                                </div>
                                <div className='general-info-form-fills' >
                                    <span>Last Name</span>
                                    <span>
                                        <input placeholder='Last Name' />
                                    </span>
                                </div>
                                <div className='general-info-form-fills' >
                                    <span>Date of Birth</span>
                                    <span>
                                        <input placeholder='dd-mm-yyyy' />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="general-info-details">
                            <div className="general-info-headers">
                                <p>Contact Details</p>
                                <p>Edit</p>
                            </div>
                            <div className="general-info-form">
                                <div className='general-info-form-fills' >
                                    <span>Mobile Number</span>
                                    <span>
                                        <input placeholder='First Name' value="xx-xxx-86xx-xxx" />
                                    </span>
                                </div>
                                <div className='general-info-form-fills' >
                                    <span>Email</span>
                                    <span>
                                        <input placeholder='Last Name' value="xxxxxbornxx15xxxxxx19xx@xxx.com" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="general-info-details">
                            <div className="general-info-headers">
                                <p>Personal Details</p>
                                <p>Edit</p>
                            </div>
                            <div className="general-info-form">
                                <div className='general-info-form-fills' >
                                    <span>Gender</span>
                                    <span>
                                        <input />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="icon-email-id">
                        <div id="small-box">
                            <div id="small-box-image-holder">
                                <img src="https://media.istockphoto.com/id/526947869/vector/man-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=5I7Vgx_U6UPJe9U2sA2_8JFF4grkP7bNmDnsLXTYlSc="/>
                            </div>
                            <div id="small-text">ixxxbxxxx15xxxxx19xx@xx.com</div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        </>
    )
}

export default ProfilePage
