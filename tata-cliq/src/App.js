// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import MensWear from './components/mensWear/MensWear';
import MultiProductsMens from './components/multi-products/MultiProductsMens';
import SingleProduct from './components/single-product/SingleProduct';
import ProfilePage from './components/profile/ProfilePage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mensWear" element={<MensWear/>}/>
        <Route exact path="/multiProductsMens" element={<MultiProductsMens/>}/>
        <Route exact path="/SingleProduct" element={<SingleProduct/>}/>
        <Route exact path="/profile" element={<ProfilePage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
