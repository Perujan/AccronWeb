import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";

import Header from "./Components/header-web";
import Footer from "./Components/Footer";

import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import Refund from "./Pages/Refund";
import Portfolio from "./Components/portfolio";
import Career from "./Components/career";
import TermsCondition from "./Components/terms-condition";
import PrivcyPolicy from "./Components/privcy-policy";
import RefundPolice from "./Components/refund-police";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/career" element={<Career />} />
        <Route path="/Term-Conditions" element={<TermsCondition />} />
        <Route path="/privcy-policy" element={<PrivcyPolicy />} />
        {/*<Route path="/blog" element={<Blog/>}/>*/}

        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/refund-policy" element={<RefundPolice />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
