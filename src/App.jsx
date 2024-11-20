import {lazy, Suspense} from 'react'

import "./index.css"

import { BrowserRouter, Route, Routes, } from 'react-router-dom';
const Home = lazy(() => import("./pages/Home"));
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const Footer = lazy(() => import("./components/footer/Footer"));
const About = lazy(() => import("./pages/About"));
const ViProject = lazy(() => import('./pages/ViProject'));
const IkeProject = lazy(() => import('./pages/IkeProject'));
const IkProject = lazy(() => import("./pages/IkProject"));
const Contact = lazy(() => import('./pages/Contact'));
const ViOneBed = lazy(() => import('./components/VIProjects/ViOneBed/ViOneBed'))
const ViTwoBed = lazy(() => import('./components/VIProjects/ViTwoBed/ViTwoBed'))
const ViThreeBed = lazy(() => import('./components/VIProjects/ViThreeBed/ViThreeBed'))
const ViThreeMaisonette = lazy(() =>
  import("./components/VIProjects/ViThreeMaisonette/ViThreeMaisonette")
);

function App() {
  

  return (
    <Suspense fallback={<div></div>}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/viprop" element={<ViProject />} />
          <Route path="/ikejaprop" element={<IkeProject />} />
          <Route path="/ikoyiprop" element={<IkProject />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vionebed" element={<ViOneBed />} />
          <Route path="/vitwobed" element={<ViTwoBed />} />
          <Route path="/vithreebed" element={<ViThreeBed />} />
          <Route path="/vithreemaisonette" element={<ViThreeMaisonette />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App
