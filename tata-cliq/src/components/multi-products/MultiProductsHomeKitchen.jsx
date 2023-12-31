import Navbar from '../Navbar';
import '../../components/multi-products/MultiProductsHomeKitchen.css'
// import { useNavigate } from "react-router-dom"
import HomeKitchenData from "../Data/HomeKitchenMultipleProduct.json"
import Footer from "../Footer"
const MultiProductsHomeKitchen = () => {

    // const router = useNavigate();

    // function goTo() {
    //     router('/SingleProduct');
    // }
    return (
        <div id="parent-MPM">
            <Navbar />
            <div id="page-title">
                <p>Dining</p>
                <p>80 Products</p>
            </div>
            <div id="sort-div">
                <div id="sort-div-align">
                    <div id="inside-sort-div-align">
                        <div id="sort-holder">
                            <p>Sort: Popularity </p>
                            <i class="fa-solid fa-arrow-down-wide-short"></i>
                        </div>
                        <div id="sort-image-holder">
                            <img src="https://www.tatacliq.com/src/plp/components/img/list.svg" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="actual-body">
                <div id="actual-body-aligner">
                    <div id="left-side">
                        <div id="left-side-fixed">
                            <div className='left-side-div-series'>
                                {/* only for title  */}
                                <div className='div-series-title'>
                                    <p>filters</p> <p className='red'>Clear All</p>
                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Department</p>
                                </div>
                                {/* already selected box  */}
                                <div className="selected-box">
                                    <p>Home</p>

                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Categories</p>
                                </div>
                                <div className="selected-box">
                                    <p>Furniture</p>
                                    <p>X</p>
                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Product Type</p>
                                </div>
                                <div className="selected-box">
                                    <p>Dining</p>
                                    <p>X</p>
                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Subcategory</p>
                                    {/* <i class="fa-solid fa-ellipsis"></i> */}
                                </div>
                                {/* circle check boxes */}
                                <div className="checkbox-series">
                                    <p><span></span>Coffee Table</p><p>1</p>
                                </div>
                                <div className="checkbox-series">
                                    <p><span></span>Dining Table Set</p><p>13</p>
                                </div>
                                <div className="checkbox-series">
                                    <p><span></span>Dining Chair</p><p>43</p>
                                </div>
                                <div className="checkbox-series">
                                    <p><span></span>Dining Table</p><p>11</p>
                                </div>
                                <div className="checkbox-series">
                                    <p><span></span>Bar Furniture</p><p>12</p>
                                </div>
                                {/*<div className="checkbox-series">
                                    <p><span></span>Jeans</p><p>10337</p>
                                </div>
                                <div className="checkbox-series">
                                    <p><span></span>Trousers & Chinos</p><p>7241</p>
                                </div>
                                <div className="checkbox-series">
                                    <p><span></span>shorts</p><p>4387</p>
                                </div>
                                <div className="checkbox-series">
                                    <p><span></span>Blazers</p><p>331</p>
                                </div>
                                <div className="checkbox-series">
                                    <p><span></span>Others</p><p>28</p>
    </div>*/}
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Brand</p>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Fabric Family</p>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Price</p>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Colour</p>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>type</p>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Discount</p>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Pattern</p>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Size</p>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>With Blouse</p>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Ocassion</p>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Occasion</p>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>All Discount</p>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Availability</p>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="right-side">
                        {/* first product  */}
                        {HomeKitchenData.map((singleObject) => (<div className="product-cart">
                            <div className="product-image-holder">
                                {singleObject.offer && (
                                    <div className="product-offer">
                                        {singleObject.offer}
                                    </div>
                                )}{singleObject.new && (
                                    <div className='product-offer-purple'>{singleObject.new}</div>)}

                                <div className='heart-div'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" />
                                </div>
                                {/* main image  */}
                                <img src={singleObject.image} alt="" />
                                <div className="shades">
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" />
                                </div>
                            </div>
                            <div className="product-description">
                                <p className='product-brand-name'>{singleObject.Name}</p>
                                <p className='material-info'>{singleObject.Description}</p>
                                <p className='item-pricing'>₹ <span className='bold'>{singleObject.Price}</span></p>

                                <div className='align-para'>
                                    {singleObject.Rating && (
                                        <div className="star-rating">
                                            <p>{singleObject.Rating}</p>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                    )}
                                    {singleObject.count && (
                                        <span className='count'>({singleObject.count})</span>
                                    )}
                                </div>
                                <p className='red'>{singleObject.Limited}</p>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>

            <Footer />
        </div >

    )
}

export default MultiProductsHomeKitchen