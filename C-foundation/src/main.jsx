import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import NavLinks from './components/NavLinks';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import Donation from './pages/Donation';

function layout(){
  return (
    <>
      <NavLinks/>
        <Outlet/>
      <Footer/>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/aboutUs",
    element: <AboutUs/>
  },
  {
    path: "/ourWork",
    element: <OurWork/>
  },
  {
    path: "/contactUs",
    element: <ContactUs/>
  },
  {
    path: "/gallery",
    element: <Gallery/>
  },
  {
    path: "/donation",
    element: <Donation/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
