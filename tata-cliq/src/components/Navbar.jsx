import React from "react";
import { useContext, useEffect, useState } from "react"
import "./../components/Navbar.css"
import { NavLink, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from "./../context/AuthContext"


function Navbar() {

    const [log, setLog] = useState(false);
    const [signup, setsignup] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const [color, setColor] = useState(false);
    const [backGround, setBackGround] = useState(false);
    const [rotate, setRotate] = useState(false)
    const redirect = useNavigate()
    const [dropDown2, setDropDown2] = useState(false);
    const [userData, setUserData] = useState({ name: "", email: "", password: "", role: "buyer", cart: [] });
    const [currentData, setCurrentData] = useState({});
    const [addproduct, setAddProduct] = useState(false);
    const [product, setproduct] = useState({ name: "", image: "", price: "", category: "womens" })
    const { state, Login, Logout } = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const [isUserLogedIn, setIsUserLogedIn] = useState(false);
    // console.log(user, "from navbar")

    useEffect(()=>{
        if(state?.user?.email){
            setIsUserLogedIn(true)
        }else{
            setIsUserLogedIn(false)
        }
    }, [state])

    //// add product //////////
    const newProductChange = (event) => {
        setproduct({ ...product, [event.target.name]: event.target.value })
    }
    // console.log(product);
    const newProductCategoryChange = (event) => {
        setproduct({ ...product, ['category']: event.target.value })
    }
    const newProductSubmit = (event) => {
        event.preventDefault();
        if (product.name && product.image && product.price && product.category) {
            const allProduct = JSON.parse(localStorage.getItem("Products")) || []
            // console.log(allProduct);
            const randomID = uuidv4();
            product.id = randomID
            allProduct.push(product);
            localStorage.setItem("Products", JSON.stringify(allProduct));
            setproduct({ name: '', image: '', price: '', category: '' })
            toast.success("product has been added");
            redirect("/newlyaddedproduct");
        } else {
            toast.error("fill all details");
        }
    }
    useEffect(() => {
        // const user = JSON.parse(localStorage.getItem("Current-User"));
        if (state?.user) {
            setsignup(true);
            setUser(state?.user); // Update the 'user' state with the value from localStorage
            // } if (user) {
            //     if (user?.role === "seller") {
            //         setAddProduct(true);
            //     } else {
            //         setAddProduct(false);
            //     }
        } else {
            setAddProduct(false);
        }

    }, [state]);
    useEffect(() => {
        if (state?.user) {
            let allUser = JSON.parse(localStorage.getItem("Users"));
            for (let i = 0; i < allUser.length; i++) {
                if (allUser[i].email == state.user.email) {
                    setUserData(allUser[i])
                }
            }
        }
    }, []);

    // useEffect(() => {
    //     // const user = JSON.parse(localStorage.getItem("Current-User"));

    //     if (state?.user) {
    //         if (state?.user?.role == "buyer") {
    //             toast.error("you are not a seller")
    //         }
    //         // } else {
    //         //     toast.error("you have not logged into your account")
    //         //     // setAddProduct(false);
    //         // }
    //     }
    // }, [state])

    ////registration part///////
    const handleRegisterInput = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }

    const handleselectorRole = (event) => {
        setUserData({ ...userData, role: event.target.value })
    }

    const handleRegisterOnsubmit = (event) => {
        event.preventDefault();

        if (userData.name && userData.email && userData.password) {
            const user = JSON.parse(localStorage.getItem("Users")) || [];
            const obj = { name: userData.name, email: userData.email, password: userData.password, role: userData.role, cart: [] };
            user.push(obj);
            localStorage.setItem("Users", JSON.stringify(user));
            toast.success("registration done");
            setsignup(false);
        } else {
            toast.error("please fill all fields")
        }
    }


    ///// login part /////////////

    const handleLoginInput = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleLoginOnSubmit = (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            const user = JSON.parse(localStorage.getItem("Users"));
            let flag = false;
            for (let i = 0; i < user.length; i++) {
                if (user[i].email == userData.email && user[i].password == userData.password) {
                    flag = true;
                    localStorage.setItem("Current-User", JSON.stringify(user[i]));
                    Login(user[i]);
                    toast.success("login successful")
                    setLog(false);
                    redirect('/');
                }

            }
            if (flag == false) {
                toast.error("details didnt match");
            }
        } else {
            toast.error("fill all details")
        }

    }

    useEffect(() => {
        // const user = JSON.parse(localStorage.getItem("Current-User"))
        const alluser = JSON.parse(localStorage.getItem("Users"));
        if (state?.user) {
            for (let i = 0; i < alluser.length; i++) {
                // console.log(alluser[i])
                if (alluser[i].email === state.user.email) {
                    setCurrentData(alluser[i])
                }
            }

        }
    }, [state])

    useEffect(() => {
        // let user = JSON.parse(localStorage.getItem("Current-User"));
        //   console.log(user, 'user-here'); 
        if (state?.user) {
            setsignup(true);
        }
    })
    // function logout() {
    //     localStorage.removeItem('Current-User');
    //     setsignup(false);
    //     alert("logout successful");
    // }
    function userloginOpen() {
        setLog(true);
        // const user = JSON.parse(localStorage.getItem("Current-User"));
        if (!state?.user) {
            setsignup(true)
        }
    }
    function userloginClose() {
        setLog(false)
        // const user = JSON.parse(localStorage.getItem("Current-User"));
        if (!state?.user) {
            setsignup(false)
        }
    }

    /// modal open and close//
    function addingProduct() {
        setAddProduct(true);
    }
    function closingaddproduct() {
        setAddProduct(false);
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
        const user = JSON.parse(localStorage.getItem("Current-User"));
        if (user) {
            redirect('/profile')
        } else {
            toast.error("please login first");
        }
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
                        <div className="upper-nav-list-addition-width"><a>Tata CliQ Luxury</a>
                            <div className="upper-nav-list-product-show" onClick={() => redirect('/newlyaddedproduct')}>Newly Added Products</div>
                            {state?.user?.role == "seller" && <div className="upper-nav-list-product-show" onClick={addingProduct}>Products To Add</div>}
                        </div>
                        <div className="upper-nav-list">CliQ Cash</div>
                        <div className="upper-nav-list">Gift Card</div>
                        <div className="upper-nav-list">CliQ Care</div>
                        <div className="upper-nav-list">Track Order</div>
                        {!isUserLogedIn ? (<div className="upper-nav-list" onMouseEnter={FallDown2} onMouseLeave={Fallup2}>Sign in/ SignUp</div>) :
                            (<div className="upper-nav-list" onMouseEnter={FallDown2} onMouseLeave={Fallup2}>{state?.user?.name}</div>)}


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
                            {state?.user?.role == "buyer" && <NavLink to="/cart" className="inner-lower"><i class="fa-solid fa-bag-shopping" ></i></NavLink>}
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
                {state?.user?.name ? (
                    <div className="profile-side-list">
                        <div className="profile-side-list-img-hold">
                            <img src="https://www.tatacliq.com/src/general/components/img/profile.png" />
                        </div>
                        <p>{state?.user?.name}</p>
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
                {currentData.name ? <div className="profile-side-list" onClick={() => {
                    Logout();
                    redirect("/");
                }}>
                    <div className="profile-side-list-img-hold">
                        <img src="https://www.tatacliq.com/src/general/components/img/settingsblack.svg" />
                    </div>
                    <p>LogOut</p>
                </div> : null}
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
                        <div className="user-role">
                            <select onChange={handleselectorRole}>
                                <option value="buyer">Buyer</option>
                                <option value="seller">Seller</option>
                            </select>
                        </div>
                        <input type="submit" />
                        <p className="toggler">If already user <button id="login-switch-btn" onClick={() => setsignup(false)}>click here</button></p>
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
                        <p>If not sign-up <button id="click" onClick={() => setsignup(true)}>click here</button></p>
                    </form>
                </div>}
            </div>}
            {addproduct && <div className="add-product-bg-screen">
                <div className="add-product-div">
                    <h1>Add Product</h1><span className="closer" onClick={closingaddproduct}>X</span>
                    <form id="add-product-form" onSubmit={newProductSubmit}>
                        <label>Product Name:</label>
                        <input type="text" name="name" onChange={newProductChange} /><br />
                        <label>Product Image:</label>
                        <input type="text" name="image" onChange={newProductChange} /><br />
                        <label>Product Price:</label>
                        <input type="numbers" name="price" onChange={newProductChange} /><br />
                        <label>Product Category:</label>
                        <div className="add-product-select-div">
                            <select onChange={newProductCategoryChange}>
                                <option value="Womens">Womens</option>
                                <option value="Mens">Mens</option>
                                <option vlaue="Kids">Kids</option>
                                <option value="Home & Kitchen">Home & Kitchen</option>
                                <option value="Beauty">Beauty</option>
                                <option value="Gadgets">Gadgets</option>
                                <option value="Jewellery">Jewellery</option>
                                <option value="excessories">excessories</option>
                            </select>
                        </div>
                        <input type="submit" />
                    </form>
                </div>
            </div>}
        </div>
    )
}
export default Navbar