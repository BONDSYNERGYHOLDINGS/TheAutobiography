import { useState } from 'react'

import "./index.css"

import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './pages/About';
import ViProject from './pages/ViProject';
import IkProject from './pages/IkProject';
import IkeProject from './pages/IkeProject';
import Contact from './pages/Contact';

function App() {
  

  return (
    <>
     
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/viprop" element={<ViProject />} />
          <Route path='/ikejaprop' element={<IkeProject />} />
          <Route path='/ikoyiprop' element={<IkProject />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
