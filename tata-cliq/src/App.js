// import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import MensWear from './components/mensWear/MensWear';
import MultiProductsMens from './components/multi-products/MultiProductsMens';
import SingleProduct from './components/single-product/SingleProduct';
import ProfilePage from './components/profile/ProfilePage';
import Cart from './components/Cart/Cart';
import WomensWear from './components/womensWear/WomensWear';
import Kids from './components/kids/Kids';
import HomeNKitchen from './components/Home&kitchen/HomeNKitchen';
import Beauty from './components/beauty/Beauty';
import MultiProductsWomens from './components/multi-products/MultiProductsWomens';
import MultiProductsKids from './components/multi-products/MultiProductsKids';
import MultiProductsHomeKitchen from './components/multi-products/MultiProductsHomeKitchen';
import MultiProductsBeauty from './components/multi-products/MultiProductsBeauty';
import MultiProductsGadgets from './components/multi-products/MultiProductsGadgets';
import MultiProductsJewellery from './components/multi-products/MultiProductsJewellery';
import MultiProductsAccessories from './components/multi-products/MultiProductsAccessories';
import Checkout from './components/checkout/Checkout';
import Wishlist from './components/wishList/Wishlist';
import NewlyAddedProduct from './components/newly-added-product/NewlyAddedProduct';




function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/newlyaddedproduct" element={<NewlyAddedProduct />} />
        <Route exact path="/beauty" element={<Beauty />} />
        <Route exact path="/home-and-kitchen" element={<HomeNKitchen />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/wishlist" element={<Wishlist />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mensWear" element={<MensWear />} />
        <Route exact path="/multiProductsMens" element={<MultiProductsMens />} />
        <Route exact path="/multiProductWomens" element={<MultiProductsWomens />} />
        <Route exact path="/multiProductKids" element={<MultiProductsKids />} />
        <Route exact path="/multiProductHomeKitchen" element={<MultiProductsHomeKitchen />} />
        <Route exact path="/multiProductBeauty" element={<MultiProductsBeauty />} />
        <Route exact path="/multiProductGadgets" element={<MultiProductsGadgets />} />
        <Route exact path="/multiProductJewellery" element={<MultiProductsJewellery />} />
        <Route exact path="/multiProductAccessories" element={<MultiProductsAccessories />} />
        <Route exact path="/womensWear" element={<WomensWear />} />
        <Route exact path="/kids" element={<Kids />} />
        <Route exact path="/SingleProduct/:id" element={<SingleProduct />} />
        <Route exact path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
