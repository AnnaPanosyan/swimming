import React from "react"
import Footer from "./componets/Footer";
import Home from "./componets/Home";
import Navbar from "./componets/Navbar";
import Offer from "./componets/Offer";
import Popular from "./componets/Popular";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Popular/>
      <Offer/>
      <Footer/>
    </div>

  );
}

export default App;
