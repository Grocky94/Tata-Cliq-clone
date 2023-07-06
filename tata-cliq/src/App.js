// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import MensWear from './components/mensWear/MensWear';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mensWear" element={<MensWear/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
