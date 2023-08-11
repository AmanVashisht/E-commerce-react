import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Mobile from './components/Mobile';
import Profile from './components/Pofile';
import Fashion from './components/Fashion';
import Grocery from './components/Grocery';
import Furniture from './components/Furniture';
import Kitchen from './components/Kitchen';
import Tv from './components/Tv';


function App() {

  return (
    <>
           <Router>
       
        <Routes>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
      {/* ////////////////// */}
            <Route path="/fashion" element={<Fashion/>}/>
            <Route path="/tv" element={<Tv/>}/>
            <Route path="/kitchen" element={<Kitchen/>}/>
            <Route path="/mobile" element={<Mobile/>}/>
            <Route path="/furniture" element={<Furniture/>}/>
            <Route path="/grocery" element={<Grocery/>}/>
      {/* /////////////////// */}
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
