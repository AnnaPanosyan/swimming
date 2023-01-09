import React from "react"
import { Route, Routes } from "react-router-dom";
import AGB from "./componets/AGB";
import Footer from "./componets/Footer";
import Home from "./componets/Home";
import Navbar from "./componets/Navbar";
import Offer from "./componets/Offer";
import Popular  from "./componets/Popular";

function App() {
  return (

    <div>
     <Navbar/>
     <Home/>
     <Popular/>
     <Offer/>
     <Footer/>
    </div>
    // <Routes>
        

    //   <Route path='/' element={ <Home/>}/>
    //   <Route path='/home' element={ <Home/>}/>
    //   <Route path='/kursplan' element={ <Kursplan/>}/>
    //   <Route path='/kursBuchen' element={ <KursBuchen/>}/>

    //   <Route path='/AGB' element={ <AGB/>}/>
    //  </Routes>
  );
}

export default App;
