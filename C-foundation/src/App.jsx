import React from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import Donation from "./pages/Donation";
import { useLayoutEffect } from "react";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/ourWork" element={<OurWork />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donation" element={<Donation />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
