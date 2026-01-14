import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/AboutUs";
import Contact from "./Pages/ContactUs";
import Login from "./Pages/Login";
import { Toaster } from "react-hot-toast";
import GstRegistration from "./Pages/GstRegistration";
import IncomeTax from "./Pages/IncomeTax";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
          error: {
            duration: 4000,
            theme: {
              primary: "red",
              secondary: "black",
            },
          },
        }}
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        <Route path="/service/income-tax" element={<IncomeTax />} />
        <Route path="/service/gst-registration" element={<GstRegistration />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
