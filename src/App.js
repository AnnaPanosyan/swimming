import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import KursBuchen from "./pages/KursBuchen";
import Kursplan from "./pages/Kursplan";
import Kontact from "./pages/Kontakt";
import Baderegeln from "./pages/Baderegeln";
import PageNotFound from "./pages/PageNotFound";
import AGB from "./componets/AGB";
import Impressum from "./componets/Impressum";
import Courses from "./componets/Courses";
import Datenschutz from "./componets/Datenschutz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="/kursbuchen" element={<KursBuchen />} />
        <Route path="/kursplan" element={<Kursplan />} />
        <Route path="/kontact" element={<Kontact />} />
        <Route path="/baderegeln" element={<Baderegeln />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/courses/:id" element={<Courses />} />
        <Route path="/AGB" element={<AGB />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Route>
    </Routes>
  );
}

export default App;
