import React from 'react'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './components/about';
import Contact from './components/contact';
import Quotes from './components/quotes';
import Inspection from './components/quotes2';
import Services from './components/services';



function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/inspection" element={<Inspection />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;