import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage';
// import Home from './Components/Home/Home';
// import Detail from './Components/Detail/Detail';
// import FormCreate from './Components/FormCreate/FormCreate';
function App() {
  return (
    <div className="App">
      {/* <h1>Henry Countries</h1> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/Home" element={<Home />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Form" element={<FormCreate />} /> */}
      </Routes>
    </div>
  );
}

export default App;
