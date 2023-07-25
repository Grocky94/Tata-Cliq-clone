import { useEffect, useState } from "react"
import "./../components/Navbar.css"
import { NavLink, useNavigate } from "react-router-dom"
function Navbar() {
    const [log, setLog] = useState(false);
    const [signup, setsignup] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const [color, setColor] = useState(false);
    const [backGround, setBackGround] = useState(false);
    const [rotate, setRotate] = useState(false)
    const redirect = useNavigate()
    const [dropDown2, setDropDown2] = useState(false);
    const [userData, setUserData] = useState({ name: "", email: "", password: "" });
    const [currentData, setCurrentData] = useState({});

    const handleRegisterInput = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }

    const handleRegisterOnsubmit = (event) => {
        event.preventDefault();

        if (userData.name && userData.email && userData.password) {
            const user = JSON.parse(localStorage.getItem("Users")) || [];
            const obj = { name: userData.name, email: userData.email, password: userData.password };
            user.push(obj);
            localStorage.setItem("Users", JSON.stringify(user));
            alert("registration done");
            setsignup(false);
        } else {
            alert("please fill all fields")
        }
    }

    const handleLoginInput = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleLoginOnSubmit = (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            const user = JSON.parse(localStorage.getItem("Users"));
            for (let i = 0; i < user.length; i++) {
                if (user[i].email == userData.email && user[i].password == userData.password) {
                    alert("login successful")
                    localStorage.setItem("Current-User", JSON.stringify(user));
                    setLog(false);
                    redirect('/');
                } else {
                    alert('credential didnt match')
                }

            }
        }

    }
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("Current-User"))
        const alluser = JSON.parse(localStorage.getItem("Users"));
        if (user) {
            for (let i = 0; i < alluser.length; i++) {
                console.log(alluser[i])
                if (alluser[i].email === user.email) {
                    setCurrentData(alluser[i])
                }
            }

        }
    })
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("Current-User"));
        //   console.log(user, 'user-here'); 
        if (user) {
            setsignup(true);
        }
    })
    function logout() {
        localStorage.removeItem('Current-User');
        setsignup(false);
        alert("logout successful");
    }
    function userloginOpen() {
        setLog(true);
        const user = JSON.parse(localStorage.getItem("Current-User"));
        if (!user) {
            setsignup(true)
        }
    }
    function userloginClose() {
        setLog(false)
        const user = JSON.parse(localStorage.getItem("Current-User"));
        if (!user) {
            setsignup(false)
        }
    }



    function FallDown() {
        setDropDown(true);
        setColor(true);
        setBackGround(true)
        setRotate(true)
    }
    function FallDown2() {
        setDropDown2(true);
    }

    function Fallup() {
        setDropDown(false);
        setColor(false);
        setBackGround(false);
        setRotate(false);
    }
    function Fallup2() {
        setDropDown2(false);
    }
    function BackHome() {
        redirect("/")
    }
    function Profile() {
        redirect('/profile')
    }


    return (
        <div id="nav">
            <div id="align-nav">
                <div id="logo">
                    <div id="child-logo" onClick={BackHome}>
                        <img src="https://www.tatacliq.com/src/general/components/img/group.svg" />
                    </div>
                </div>
                <div id="rightSide">
                    <div id="upper-rightSide">
                        <div className="upper-nav-list-addition-width"><a>Tata CliQ Luxury</a></div>
                        <div className="upper-nav-list">CliQ Cash</div>
                        <div className="upper-nav-list">Gift Card</div>
                        <div className="upper-nav-list">CliQ Care</div>
                        <div className="upper-nav-list">Track Order</div>
                        {!currentData.name ? (<div className="upper-nav-list" onMouseEnter={FallDown2} onMouseLeave={Fallup2}>Sign in/ SignUp</div>) :
                            (<div className="upper-nav-list" onMouseEnter={FallDown2} onMouseLeave={Fallup2}>{currentData.name}</div>)}


                    </div>
                    <div id="below-rightSide">
                        <div className="lower-nav-list" onMouseEnter={FallDown} onMouseLeave={Fallup}>
                            <p>Categories <i class="fa-solid fa-angle-up " style={{ transform: rotate ? "rotate(180deg)" : "rotate(0deg)" }}></i></p>
                        </div>
                        <div className="lower-nav-list">
                            <p>Brands <i class="fa-solid fa-angle-up"></i></p>
                        </div>
                        <div className="lower-nav-list-addition-width">
                            <div id="search">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input placeholder="Search for Categories" />
                            </div>
                        </div>
                        <div className="lower-nav-list">
                            <NavLink to="/wishlist" className="inner-lower"><i class="fa-regular fa-heart"></i></NavLink>
                            <NavLink to="/cart" className="inner-lower"><i class="fa-solid fa-bag-shopping" ></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            {dropDown && <div className="category-dropdown" onMouseEnter={FallDown} onMouseLeave={Fallup} style={{ backgroundColor: backGround ? "white" : "black", color: color ? "black" : "white" }}
            >
                <NavLink to="/multiProductWomens" className="category-dropdown-cards" >
                    <p>Women's Fashion</p>
                    <i class="fa-solid fa-angle-right"></i>
                </NavLink>
                <NavLink to="/multiProductsMens" className="category-dropdown-cards">
                    <p>Men's Fashion</p>
                    <i class="fa-solid fa-angle-right"></i>
                </NavLink>
                <NavLink to="/multiProductKids" className="category-dropdown-cards" >
                    <p>Kid's Fashion</p>
                    <i class="fa-solid fa-angle-right"></i>
                </NavLink>
                <NavLink to="/multiProductHomeKitchen" className="category-dropdown-cards" >
                    <p>Home & Kitchen</p>
                    <i class="fa-solid fa-angle-right"></i>
                </NavLink>
                <NavLink to="/multiProductBeauty" className="category-dropdown-cards" >
                    <p>Beauty</p>
                    <i class="fa-solid fa-angle-right"></i>
                </NavLink>
                <NavLink to="/multiProductGadgets" className="category-dropdown-cards" >
                    <p>Gadgets</p>
                    <i class="fa-solid fa-angle-right"></i>
                </NavLink>
                <NavLink to="/multiProductJewellery" className="category-dropdown-cards" >
                    <p>Jewellery</p>
                    <i class="fa-solid fa-angle-right"></i>
                </NavLink>
                <NavLink to="/multiProductAccessories" className="category-dropdown-cards" >
                    <p>Accessories</p>
                    <i class="fa-solid fa-angle-right"></i>
                </NavLink>
            </div>}
            {dropDown2 && <div id="profile-side" onMouseEnter={FallDown2} onMouseLeave={Fallup2}>
                {currentData.name ? (
                    <div className="profile-side-list">
                        <div className="profile-side-list-img-hold">
                            <img src="https://www.tatacliq.com/src/general/components/img/profile.png" />
                        </div>
                        <p>{currentData.name}</p>
                    </div>
                ) : (
                    <div className="profile-side-list" onClick={userloginOpen}>
                        <button id="login-btn">Login/Register</button>
                    </div>
                )}
                <div className="profile-side-list" onClick={Profile}>
                    <div className="profile-side-list-img-hold">
                        <img src="https://www.tatacliq.com/src/general/components/img/profile.png" />
                    </div>
                    <p>My Account</p>
                </div>
                <div className="profile-side-list">
                    <div className="profile-side-list-img-hold">
                        <img src="https://www.tatacliq.com/src/general/components/img/order-history.svg" />
                    </div>
                    <p>Order History</p>
                </div>
                <div className="profile-side-list">
                    <div className="profile-side-list-img-hold">
                        <img src="https://www.tatacliq.com/src/general/components/img/WL7.svg" />
                    </div>
                    <p>My Wishlist</p>
                </div>
                <div className="profile-side-list">
                    <div className="profile-side-list-img-hold">
                        <img src="https://www.tatacliq.com/src/account/components/img/alert.svg" />
                    </div>
                    <p>Alert & Coupon</p>
                </div>
                <div className="profile-side-list">
                    <div className="profile-side-list-img-hold">
                        <img src="https://www.tatacliq.com/src/account/components/img/giftCards.svg" />
                    </div>
                    <p>Gift Card</p>
                </div>
                <div className="profile-side-list">
                    <div className="profile-side-list-img-hold">
                        <img src="https://www.tatacliq.com/src/account/components/img/cliqCash.svg" />
                    </div>
                    <p>CliQ Cash</p>
                </div>
                <div className="profile-side-list" onClick={logout}>
                    <div className="profile-side-list-img-hold">
                        <img src="https://www.tatacliq.com/src/general/components/img/settingsblack.svg" />
                    </div>
                    <p>LogOut</p>
                </div>
            </div>}
            {log && <div id="parent-signup">
                {signup && <div id="signup">
                    <h1>signup</h1><span id="close-x" onClick={userloginClose}>X</span>
                    <form id="sign-form" onSubmit={handleRegisterOnsubmit}>
                        <label>Name:</label><br />
                        <input type="text" name="name" onChange={handleRegisterInput} /><br />
                        <label>Email:</label><br />
                        <input type="email" name="email" onChange={handleRegisterInput} /><br />
                        <label>Password:</label><br />
                        <input type="password" name="password" onChange={handleRegisterInput} />
                        <input type="submit" />
                    </form>
                </div>}
                {!signup && <div id="login">
                    <h1>Login</h1><span id="close-x" onClick={userloginClose}>X</span>
                    <form id="login-form" onSubmit={handleLoginOnSubmit}>
                        <label>Email:</label><br />
                        <input type="email" name="email" onChange={handleLoginInput} /><br />
                        <label>Password:</label><br />
                        <input type="password" name="password" onChange={handleLoginInput} />
                        <input type="submit" />
                        <p>If not sign-up <button id="click">click here</button></p>
                    </form>
                </div>}
            </div>}
        </div>
    )
}
export default Navbar