import React, { useState } from "react";
import HomePage from "./components/HomePage";
import Login from "./components/Auth/Login";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import SearchForm from "./components/SearchForm";
import TopHeader from "./components/HeaderFooter/TopHeader";
import Header from "./components/HeaderFooter/Header";
import MobileMenu from "./components/HeaderFooter/MobileMenu";
import Footer from "./components/HeaderFooter/Footer";
import QuickViewPopup from "./components/QuickViewPopup";
import Register from "./components/Auth/Register";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
      setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <BrowserRouter>
      <SearchForm/>
      <MobileMenu isMobileMenuOpen={isMobileMenuOpen} closeMobileMenu={closeMobileMenu}/>
      <TopHeader/>
      <Header toggleMobileMenu={toggleMobileMenu}/>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />}/>
      </Routes>
      <Footer/>
      <span id="site-scroll"><i className="icon anm anm-angle-up-r"></i></span>
      <QuickViewPopup/>
      </BrowserRouter>
    </>
  );
}

export default App;