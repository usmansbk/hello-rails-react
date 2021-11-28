import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greeting from "./Greeting";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/greeting" element={<Greeting />} />
    </Routes>
  </BrowserRouter>
);

export default App;
