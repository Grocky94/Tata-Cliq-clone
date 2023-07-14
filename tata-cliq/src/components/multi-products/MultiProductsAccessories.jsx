import Navbar from '../Navbar';
import '../multi-products/MultiProductsAccessories.css'
// import { useNavigate } from "react-router-dom"
import AccessoriesData from "../Data/AccessoriesMultipleProduct.json"
import Footer from "../Footer"
const MultiProductsAccessories= () => {

    // const router = useNavigate();

    // function goTo() {
    //     router('/SingleProduct');
    // }
    return (
        <div id="parent-MPM">
            <Navbar />
            <div id="page-title">
                <p>Womens bags</p>
                <p>34573 Products</p>
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
                                    <p>Accessories</p>

                                </div>
                            </div>
                            {/* <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Categories</p>
                                </div>
                                <div className="selected-box">
                                    <p>Ethnic wear</p>
                                    <p>X</p>
                                </div>
                            </div> */}
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Category</p>
                                     <i class="fa-solid fa-ellipsis"></i> 
                                </div>
                                {/* circle check boxes */}
                                <div className="checkbox-series">
                                    <p><span></span>Women Bags</p><p>15850</p>
                                </div>
                                <div className="checkbox-series">
                                    <p><span></span>Women's Fashion Esse</p><p>419</p>
                                </div>
                                <div className="checkbox-series">
                                    <p><span></span>Women's Hair acc.</p><p>328</p>
                                </div>
                                <div className="checkbox-series">
                                    <p><span></span>Women Belts</p><p>1108</p>
                                </div>
                                <div className="checkbox-series">
                                    <p><span></span>Mens bags</p><p>7902</p>
                                </div>
                                <div className="checkbox-series">
                                    <p><span></span>Mens Fashion esse.</p><p>5122</p>
                                </div>
                                <div className="checkbox-series">
                                    <p><span></span>Mens Belts</p><p>1814</p>
                                </div>
                                <div className="checkbox-series">
                                    <p><span></span>Kids Accessories</p><p>131</p>
                                </div>
                                <div className="checkbox-series">
                                    <p><span></span>Utility & Stationary</p><p>1573</p>
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
                                    <p>Bag Type</p>
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
                                    <p>Bag Size</p>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Material</p>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Suitable For</p>
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
                                    <p>Pattern</p>
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
                                    <p>Strap Type</p>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="right-side">
                        {/* first product  */}
                        {AccessoriesData.map((singleObject) => (<div className="product-cart">
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

export default MultiProductsAccessories