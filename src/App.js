import React from "react"
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import KursBuchen from "./pages/KursBuchen";
import Kursplan from "./pages/Kursplan";
import Kontact from "./pages/Kontakt";
import Feedback from "./pages/Feedback";
import Baderegeln from "./pages/Baderegeln";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (

    <Routes>
      <Route path='/' element={<Main/>}>
        <Route index element={<Home/>}/>
        <Route path='kursbuchen' element={<KursBuchen/>}/>
        <Route path='kursplan' element={<Kursplan/>}/>
        <Route path='kontact' element={<Kontact/>}/>
        <Route path='feedback' element={<Feedback/>}/>
        <Route path='baderegeln' element={<Baderegeln/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        {/*<Rout  e path='curses' element={<Curses/>}/>*/}

      </Route>
    </Routes>


  );
}

export default App;
