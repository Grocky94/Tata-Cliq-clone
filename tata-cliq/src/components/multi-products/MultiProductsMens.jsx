import './..//multi-products/MultiProductsMens.css'
import {useNavigate} from "react-router-dom"
const MultiProductsMens = () => {
   const router = useNavigate();

   function goTo (){
    router('/SingleProduct');
   }
    return (
        <div id="parent-MPM">
            <div id="page-title">
                <p>Men's winter wear</p>
                <p>111050 Products</p>
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
                                    <p>Men's Clothing</p>

                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Categories</p>
                                </div>
                                <div className="selected-box">
                                    <p>Casual wear</p>
                                    <p>X</p>
                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Categories</p>
                                    <i class="fa-solid fa-ellipsis"></i>
                                </div>
                                {/* circle check boxes  */}
                                <div className="checkbox-series">
                                    <p><span></span>T-shirt & Polos</p><p>40785</p>
                                </div>
                                <div className="checkbox-series">
                                    <p><span></span>Shirt</p><p>30883</p>
                                </div>
                                <div className="checkbox-series">
                                    <p><span></span>Sweatshirts</p><p>7426</p>
                                </div>
                                <div className="checkbox-series">
                                    <p><span></span>Jackets</p><p>6523</p>
                                </div>
                                <div className="checkbox-series">
                                    <p><span></span>Sweaters</p><p>3721</p>
                                </div>
                                <div className="checkbox-series">
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
                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Brand</p>
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
                                    <p>Type</p>
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
                                    <p>Price</p>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>fit</p>
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
                                    <p>Fabric Family</p>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Sleeve</p>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                            <div className='left-side-div-series'>
                                <div className='div-series-title'>
                                    <p>Collar</p>
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
                        <div className="product-cart">
                            <div className="product-image-holder">
                                <div className='heart-div'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" />
                                </div> 
                        {/* main image  */}
                        <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015191655_437Wx649H_202211060047171.jpeg" alt="" />
                                <div className="shades">
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" />
                                </div>
                            </div>
                            <div className="product-description">
                                <p className='product-brand-name'>U.S. Polo Assn.</p>
                                <p className='material-info'>U.S. Polo Assn. Dark green Regular Fit Cotton Shirt</p>
                                <p className='item-pricing'>₹ <span className='bold'>2299</span></p>
                                <div className='align-para'>
                                    <div className="star-rating"><p>2.8</p><i class="fa-solid fa-star"></i></div><span className='count' >(5)</span>
                                </div>
                            </div>
                        </div>
                        {/* second product  */}
                        <div className="product-cart">
                            <div className="product-image-holder">
                                <div className='heart-div'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" />
                                </div> 
                        {/* main image  */}
                        <img src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016373929_437Wx649H_202302042021191.jpeg" alt="" />
                                <div className="shades">
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" />
                                </div>
                            </div>
                            <div className="product-description">
                                <p className='product-brand-name'>U.S.Polo Assn.</p>
                                <p className='material-info'>U.S. Polo Assn. Ivory Cotton Regular Fit Polo t-Shirt</p>
                                <p className='item-pricing'>₹ <span className='bold'>1899</span> <span className='line-over'>₹3499</span></p>
                            </div>
                        </div>
                        {/* third product  */}
                        <div className="product-cart" onClick={goTo}>
                            <div className="product-image-holder">
                                <div className="product-offer">
                                    42% off
                                </div>
                                <div className='heart-div'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" />
                                </div> 
                        {/* main image  */}
                        <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016645596_437Wx649H_202302241106111.jpeg"/>
                                <div className="shades">
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" />
                                </div>
                            </div>
                            <div className="product-description">
                                <p className='product-brand-name'>Puma</p>
                                <p className='material-info'>Puma Ess+</p>
                                <p className='item-pricing'>₹ <span className='bold'>1855</span> <span className='line-over'>₹3199</span></p>
                                <div className='align-para'><div className="star-rating"><p>4.3</p><i class="fa-solid fa-star"></i></div><span className='count' >(6)</span></div>
                                <p className='red'>Limited Stock!</p>
                            </div>
                        </div> 
                        {/* fourth product  */}
                        <div className="product-cart">
                            <div className="product-image-holder">
                                <div className="product-offer">
                                    55% off
                                </div>
                                <div className='heart-div'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" />
                                </div> 
                        {/* main image  */}
                         <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000014765428_437Wx649H_202210061555121.jpeg" alt="" />
                                <div className="shades">
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" />
                                </div>
                            </div>
                            <div className="product-description">
                                <p className='product-brand-name'>United Colors of Benetton</p>
                                <p className='material-info'>United Colors of Benetton Maroon Polo T-Shirt</p>
                                <p className='item-pricing'>₹ <span className='bold'>1034</span> <span className='line-over'>₹2299</span></p>
                                <div className='align-para'><div className="star-rating"><p>3</p><i class="fa-solid fa-star"></i></div><span className='count' >(2)</span></div>
                                <p className='red'>Limited Stock!</p>
                            </div>
                        </div> 
                        {/* fifth product  */}
                        <div className="product-cart">
                            <div className="product-image-holder">
                                <div className="product-offer">
                                    55% off
                                </div>
                                <div className='heart-div'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" />
                                </div> 
                        {/* main image  */}
                         <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000015247442_437Wx649H_202211110452311.jpeg" alt="" />
                                <div className="shades">
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" />
                                </div>
                            </div>
                            <div className="product-description">
                                <p className='product-brand-name'>Jack & Jones</p>
                                <p className='material-info'>Jask & Jones Navy Blue Cotton slim fit Polo T-Shirt</p>
                                <p className='item-pricing'>₹ <span className='bold'>764</span> <span className='line-over'>₹1699</span></p>
                                <div className='align-para'><div className="star-rating"><p>4.6</p><i class="fa-solid fa-star"></i></div><span className='count' >(14)</span></div>
                            </div>
                        </div> 
                        {/* sixth product  */}
                        <div className="product-cart">
                            <div className="product-image-holder">
                                <div className="product-offer">
                                    55% off
                                </div>
                                <div className='heart-div'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" />
                                </div>
                                {/* main image  */}
                                <img src="//img.tatacliq.com/images/i8/437Wx649H/MP000000014309997_437Wx649H_202209012128361.jpeg" alt="" />
                                <div className="shades">
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" />
                                </div>
                            </div>
                            <div className="product-description">
                                <p className='product-brand-name'>United Colors of Benetton</p>
                                <p className='material-info'>United Colors of Benetton Blue lightly washed jeans</p>
                                <p className='item-pricing'>₹ <span className='bold'>2299</span> <span className='line-over'>₹3499</span></p>
                                <div className='align-para'><div className="star-rating"><p>2.8</p><i class="fa-solid fa-star"></i></div><span className='count' >(5)</span></div>
                                <p className='red'>Limited Stock!</p>
                            </div>
                        </div>
                        {/* seventh product  */}
                        <div className="product-cart">
                            <div className="product-image-holder">
                                <div className="product-offer-purple">
                                    New
                                </div>
                                <div className='heart-div'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" />
                                </div>
                                {/* main image  */}
                                <img src="https://img.tatacliq.com/images/i8/437Wx649H/MP000000014428153_437Wx649H_202209112250181.jpeg" alt="" />
                                <div className="shades">
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" />
                                </div>
                            </div>
                            <div className="product-description">
                                <p className='product-brand-name'>U.S.Polo Assn.</p>
                                <p className='material-info'>U.S.Polo Assn. Dark Green Cotton Regular Fit Printed Polo T-shirt</p>
                                <p className='item-pricing'>₹ <span className='bold'>1599</span> <span className='line-over'>₹3499</span></p>
                                <div className='align-para'><div className="star-rating"><p>3</p><i class="fa-solid fa-star"></i></div><span className='count' >(2)</span></div>
                                <p className='red'>Limited Stock!</p>
                            </div>
                        </div>
                        {/* eighth product  */}
                        <div className="product-cart">
                            <div className="product-image-holder">
                                <div className="product-offer">
                                    61% off
                                </div>
                                <div className='heart-div'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" />
                                </div>
                                {/* main image  */}
                                <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016971613_437Wx649H_202304131203541.jpeg" alt="" />
                                <div className="shades">
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" />
                                </div>
                            </div>
                            <div className="product-description">
                                <p className='product-brand-name'>Pepe Jeans</p>
                                <p className='material-info'>Pepe Jeans Black Tapered Fit Jeans</p>
                                <p className='item-pricing'>₹ <span className='bold'>1499</span> <span className='line-over'>₹3499</span></p>
                                <div className='align-para'><div className="star-rating"><p>3.6</p><i class="fa-solid fa-star"></i></div><span className='count' >(10)</span></div>
                                <p>price dropped by<span className='red'> ₹ 2000</span></p>
                            </div>
                        </div>
                        {/* ninth product  */}
                        <div className="product-cart">
                            <div className="product-image-holder">
                                <div className="product-offer-purple">
                                    New
                                </div>
                                <div className='heart-div'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" />
                                </div>
                                {/* main image  */}
                                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017999239_437Wx649H_202306171935211.jpeg" alt="" />
                                <div className="shades">
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" />
                                </div>
                            </div>
                            <div className="product-description">
                                <p className='product-brand-name'>Red Chief</p>
                                <p className='material-info'>Red Cheif Blue Slim Fit Lightly Washed Jeans</p>
                                <p className='item-pricing'>₹ <span className='bold'>2115</span> <span className='line-over'>₹4699</span></p>
                            </div>
                        </div>
                        {/* tenth product  */}
                        <div className="product-cart">
                            <div className="product-image-holder">
                                <div className="product-offer">
                                    50% off
                                </div>
                                <div className='heart-div'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" />
                                </div>
                                {/* main image  */}
                                <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016710567_437Wx649H_202303020148201.jpeg" alt="" />
                                <div className="shades">
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" />
                                </div>
                            </div>
                            <div className="product-description">
                                <p className='product-brand-name'>Jack & Jones</p>
                                <p className='material-info'>Jack & Jones Jet Black Slim Fit Shirt</p>
                                <p className='item-pricing'>₹ <span className='bold'>1499</span> <span className='line-over'>₹2999</span></p>
                                <div className='align-para'><div className="star-rating"><p>4.4</p><i class="fa-solid fa-star"></i></div><span className='count' >(8)</span></div>
                            </div>
                        </div>
                        {/* eleven product  */}
                        <div className="product-cart">
                            <div className="product-image-holder">
                                <div className="product-offer">
                                    78% off
                                </div>
                                <div className='heart-div'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" />
                                </div>
                                {/* main image  */}
                                <img src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016362070_437Wx649H_202302040017141.jpeg" alt="" />
                                <div className="shades">
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" />
                                </div>
                            </div>
                            <div className="product-description">
                                <p className='product-brand-name'>Red Tape</p>
                                <p className='material-info'>Red Tape White Regular Fit Graphic Print Cotton Crew T-Shirt</p>
                                <p className='item-pricing'>₹ <span className='bold'>417</span> <span className='line-over'>₹1899</span></p>
                                <div className='align-para'><div className="star-rating"><p>4.5</p><i class="fa-solid fa-star"></i></div><span className='count' >(15)</span></div>
                                <p>price dropped by<span className='red'> ₹ 152</span></p>
                            </div>
                        </div>
                        {/* tweleve product  */}
                        <div className="product-cart">
                            <div className="product-image-holder">
                                <div className="product-offer-purple">
                                    New
                                </div>
                                <div className='heart-div'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" />
                                </div>
                                {/* main image  */}
                                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000017911985_437Wx649H_202306121421201.jpeg" alt="" />
                                <div className="shades">
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" />
                                </div>
                            </div>
                            <div className="product-description">
                                <p className='product-brand-name'>ETA</p>
                                <p className='material-info'>ETA by Westside Printed Black Resort Fit Shirt</p>
                                <p className='item-pricing'>₹ <span className='bold'>899</span></p>
                                <p className='red'>Limited Stock!</p>
                            </div>
                        </div>
                        {/* thirteen product  */}
                        <div className="product-cart">
                            <div className="product-image-holder">
                                <div className="product-offer">
                                    50% off
                                </div>
                                <div className='heart-div'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" />
                                </div>
                                {/* main image  */}
                                <img src="https://img.tatacliq.com/images/i9/437Wx649H/MP000000016236811_437Wx649H_202301261320511.jpeg" alt="" />
                                <div className="shades">
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" />
                                </div>
                            </div>
                            <div className="product-description">
                                <p className='product-brand-name'>Pepe Jeans</p>
                                <p className='material-info'>Pepe Jeans Green Cotton Regular Fit Colour block Polo T-Shirt</p>
                                <p className='item-pricing'>₹ <span className='bold'>899</span> <span className='line-over'>₹1799</span></p>
                                <div className='align-para'><div className="star-rating"><p>3.9</p><i class="fa-solid fa-star"></i></div><span className='count' >(14)</span></div>
                                <p className='red'>Limited Stock!</p>
                            </div>
                        </div>
                        {/* fourteen product  */}
                        <div className="product-cart">
                            <div className="product-image-holder">
                                <div className='heart-div'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" />
                                </div>
                                {/* main image  */}
                                <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000017339144_437Wx649H_202304222144321.jpeg" alt="" />
                                <div className="shades">
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" />
                                </div>
                            </div>
                            <div className="product-description">
                                <p className='product-brand-name'>WES Casuals</p>
                                <p className='material-info'>WES Casuals by Westside Navy Floral-Printed Slim-Fit Shirt</p>
                                <p className='item-pricing'>₹ <span className='bold'>1299</span></p>
                                <div className='align-para'><div className="star-rating"><p>5</p><i class="fa-solid fa-star"></i></div><span className='count' >(1)</span></div>
                            </div>
                        </div>
                        {/* fifteen product  */}
                        <div className="product-cart">
                            <div className="product-image-holder">
                                <div className='heart-div'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" />
                                </div>
                                {/* main image  */}
                                <img src="https://img.tatacliq.com/images/i10/437Wx649H/MP000000016886805_437Wx649H_202303162355511.jpeg" alt="" />
                                <div className="shades">
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" />
                                </div>
                            </div>
                            <div className="product-description">
                                <p className='product-brand-name'>ETA</p>
                                <p className='material-info'>ETA by Westside Grey Slim-Fit Pure Cotton Chinos</p>
                                <p className='item-pricing'>₹ <span className='bold'>1499</span></p>
                                <div className='align-para'><div className="star-rating"><p>3.3</p><i class="fa-solid fa-star"></i></div><span className='count' >(9)</span></div>
                            </div>
                        </div>
                        {/* sixteen product  */}
                        <div className="product-cart">
                            <div className="product-image-holder">
                                <div className="product-offer-purple">
                                    New
                                </div>
                                <div className='heart-div'>
                                    <img src="https://www.tatacliq.com/src/general/components/img/WL1.svg" />
                                </div>
                                {/* main image  */}
                                <img src="https://img.tatacliq.com/images/i11/437Wx649H/MP000000018027381_437Wx649H_202306211108201.jpeg" alt="" />
                                <div className="shades">
                                    <img src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg" />
                                </div>
                            </div>
                            <div className="product-description">
                                <p className='product-brand-name'>Nuon Men</p>
                                <p className='material-info'>Nuon - Mens by Westside Solid Dark Grey Rodeo Slim Fit Jeans</p>
                                <p className='item-pricing'>₹ <span className='bold'>1499</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MultiProductsMens