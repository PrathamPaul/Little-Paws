// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/sec1';
import MainPetGridSection from './Components/MainPetgridsection';

function App() {

  return (
    <>
    {/* <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={() => <h2>Home Page</h2>} />
        <Route path="/about" component={() => <h2>About Page</h2>} />
        <Route path="/services" component={() => <h2>Services Page</h2>} />
        <Route path="/contact" component={() => <h2>Contact Page</h2>} />
      </Routes>
    </Router> */}
    <HeroSection/>
    {/* <MainPetGridSection/> */}
    </>
  );
};

export default App
