import React from 'react'
import Navbar from './component/navbar/Navbar';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import WhyOutr from './pages/why-outr/WhyOutr';
import Placement from './pages/placements/Placement';
import OurTeam from './pages/our-team/OurTeam';
import Contact from "./pages/contact/Contact";
import {Routes,Route} from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/why-outr" element={<WhyOutr/>} />
        <Route path="/placements" element={<Placement/>} />
        <Route path="/our-team" element={<OurTeam/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App