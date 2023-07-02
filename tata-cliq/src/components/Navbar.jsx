import "./../components/Navbar.css"
function Navbar() {
    return (
        <div id="nav">
            <div id="align-nav">
                <div id="logo">
                    <div id="child-logo">
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
                        <div className="upper-nav-list">Sign in/ SignUp</div>
                    </div>
                    <div id="below-rightSide">
                        <div className="lower-nav-list">
                            <p>Categories <i class="fa-solid fa-angle-down"></i></p>
                        </div>
                        <div className="lower-nav-list">
                            <p>Brands <i class="fa-solid fa-angle-down"></i></p>
                        </div>
                        <div className="lower-nav-list-addition-width">
                            <div id="search">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input placeholder="Search for Categories" />
                            </div>
                        </div>
                        <div className="lower-nav-list">
                            <div><i class="fa-regular fa-heart"></i></div>
                            <div><i class="fa-solid fa-bag-shopping"></i></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Navbar