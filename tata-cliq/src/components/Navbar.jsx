import { useState } from "react"
import "./../components/Navbar.css"
import { useNavigate } from "react-router-dom"
function Navbar() {
    const [dropDown, setDropDown] = useState(false);
    const [color, setColor] = useState(false);
    const [backGround, setBackGround] = useState(false);
    const [rotate, setRotate] = useState(false)
    const redirect = useNavigate()
    const [dropDown2, setDropDown2] = useState(false);

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
    function ToNavigate() {
        redirect("/mensWear")
    }
    function BackHome() {
        redirect("/")
    }
    function Profile(){
        redirect('/profile')
    }
    function Cart(){
        redirect('/cart')
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
                        <div className="upper-nav-list" onMouseEnter={FallDown2} onMouseLeave={Fallup2}>Sign in/ SignUp</div>
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
                            <div><i class="fa-regular fa-heart"></i></div>
                            <div onClick={Cart}><i class="fa-solid fa-bag-shopping" ></i></div>
                        </div>
                    </div>
                </div>
            </div>
            {dropDown && <div className="category-dropdown" onMouseEnter={FallDown} onMouseLeave={Fallup} style={{ backgroundColor: backGround ? "white" : "black", color: color ? "black" : "white" }}
            >
                <div className="category-dropdown-cards">
                    <p>Women's Fashion</p>
                    <i class="fa-solid fa-angle-right"></i>
                </div>
                <div className="category-dropdown-cards" onClick={ToNavigate}>
                    <p>Men's Fashion</p>
                    <i class="fa-solid fa-angle-right"></i>
                </div>
                <div className="category-dropdown-cards">
                    <p>Kid's Fashion</p>
                    <i class="fa-solid fa-angle-right"></i>
                </div>
                <div className="category-dropdown-cards">
                    <p>Home & Kitchen</p>
                    <i class="fa-solid fa-angle-right"></i>
                </div>
                <div className="category-dropdown-cards">
                    <p>Beauty</p>
                    <i class="fa-solid fa-angle-right"></i>
                </div>
                <div className="category-dropdown-cards">
                    <p>Gadgets</p>
                    <i class="fa-solid fa-angle-right"></i>
                </div>
                <div className="category-dropdown-cards">
                    <p>Jewellery</p>
                    <i class="fa-solid fa-angle-right"></i>
                </div>
                <div className="category-dropdown-cards">
                    <p>Accessories</p>
                    <i class="fa-solid fa-angle-right"></i>
                </div>
            </div>}
            {dropDown2 && <div id="profile-side" onMouseEnter={FallDown2} onMouseLeave={Fallup2}>
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
                <div className="profile-side-list">
                    <div className="profile-side-list-img-hold">
                        <img src="https://www.tatacliq.com/src/general/components/img/settingsblack.svg" />
                    </div>
                    <p>LogOut</p>
                </div>
            </div>}
        </div>
    )
}
export default Navbar