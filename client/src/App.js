import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Home from "./Components/Home/Home";
import Detail from "./Components/Detail/Detail";
import Form from "./Components/Form/Form";
import NavBar from "./Components/NavBar/NavBar";

function App() {
const location = useLocation().pathname;
  return (
    <div className="App">
      {location !== "/" && <NavBar/>}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/detail/:IdCountry" element={<Detail />} />
        <Route exact path="/create" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;