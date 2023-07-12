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


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/beauty" element={<Beauty />} />
        <Route exact path="/home-and-kitchen" element={<HomeNKitchen />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mensWear" element={<MensWear />} />
        <Route exact path="/multiProductsMens" element={<MultiProductsMens />} />
        <Route exact path="/multiProductWomens" element={<MultiProductsWomens />} />
        <Route exact path="/multiProductKids" element={<MultiProductsKids/>}/>
        <Route exact path="/multiProductHomeKitchen" element={<MultiProductsHomeKitchen/>}/>
        <Route exact path="/multiProductBeauty" element={<MultiProductsBeauty/>}/>
        <Route exact path="/womensWear" element={<WomensWear />} />
        <Route exact path="/kids" element={<Kids />} />
        <Route exact path="/SingleProduct" element={<SingleProduct />} />
        <Route exact path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
