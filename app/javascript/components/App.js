import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";
import Greeting from "./Greeting";
import store from "../redux/configureStore";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <LoadingBar />
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
