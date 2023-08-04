import React, { useContext, useEffect, useState } from 'react'
import './ProfilePage.css'
import Navbar from '../Navbar'
import Footer from "../Footer"
import { toast } from "react-toastify"
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {

    const { state, Login } = useContext(AuthContext);
    // console.log(Login)
    const [userData, setUserData] = useState();
    const [previousData, setPreviousData] = useState();
    const [showEditSection, setShowEditSection] = useState(false)


    const router = useNavigate();
    // console.log(userData)
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("Current-User"));
        if (!currentUser) {
            toast.error("please login first")
            router("/login")
        }
        const allUser = JSON.parse(localStorage.getItem("Users"));
        if (currentUser && allUser) {
            for (let i = 0; i < allUser.length; i++) {
                if (allUser[i].email == currentUser.email && allUser[i].password == currentUser.password) {
                    setUserData(allUser[i]);
                }
            }
        }
    }, [])

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }
    const selectRole = (event) => {
        setUserData({ ...userData, ["role"]: event.target.value })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem("Current-User"));
        const allUser = JSON.parse(localStorage.getItem("Users"));
        for (let i = 0; i < allUser.length; i++) {
            if (allUser[i].email == currentUser.email && allUser[i].password == currentUser.password) {
                if (currentUser) {
                    allUser[i].name = userData.name;
                    allUser[i].password = userData.password;
                    allUser[i].role = userData.role;
                    currentUser.name = userData.name;
                    currentUser.password = userData.password;
                    setPreviousData(allUser[i])
                }
            }
        }
        Login(currentUser);
        localStorage.setItem("Current-User", JSON.stringify(currentUser));
        localStorage.setItem("Users", JSON.stringify(allUser));
        setUserData({});
        toast.success("profile Updated")
    }
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
                                <p onClick={() => setShowEditSection(true)}>Edit</p>
                            </div>
                            <div className="general-info-form">
                                <div className='general-info-form-fills' >
                                    <span>Name</span>
                                    <span>
                                        <h4>{previousData?.name}</h4>
                                    </span>
                                </div>
                                <div className='general-info-form-fills' >
                                    <span>Password</span>
                                    <span>
                                        <h4>{previousData?.password}</h4>
                                    </span>
                                </div>
                                <div className='general-info-form-fills' >
                                    <span>Email</span>
                                    <span>
                                        <h4>{previousData?.email}</h4>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        {showEditSection && (<div id="general-info-edit">
                            <div id="general-info-head">Edit Infomation</div>
                            <div className="general-info-details-edit">
                                <div className="general-info-headers">
                                    <p>Basic Details</p>
                                    <p onClick={() => setShowEditSection(false)}>Close</p>
                                </div>
                                <form onSubmit={handleOnSubmit}>
                                    <div className="general-info-form" onSubmit={handleOnSubmit}>
                                        <div className='general-info-form-fills' >
                                            <span>Name</span>
                                            <span>
                                                <input placeholder='Name' name="name" onChange={handleChange} />
                                            </span>
                                        </div>
                                        <div className='general-info-form-fills' >
                                            <span>Password</span>
                                            <span>
                                                <input placeholder='Password' name="password" onChange={handleChange} />
                                            </span>
                                        </div>
                                        <div className='general-info-form-fills' >
                                            <span>Email</span>
                                            <span>
                                                <input placeholder='Email' disabled value={userData?.email} />
                                            </span>
                                        </div>
                                        <button type="submit" className='save'>Save</button>
                                    </div>
                                </form>
                            </div>
                        </div >)}

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
                                        <input placeholder='Last Name' value={userData?.email} />
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
                                <img src="https://media.istockphoto.com/id/526947869/vector/man-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=5I7Vgx_U6UPJe9U2sA2_8JFF4grkP7bNmDnsLXTYlSc=" />
                            </div>
                            <div id="small-text">{previousData?.name}</div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        </>
    )
}

export default ProfilePage
