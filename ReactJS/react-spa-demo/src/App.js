import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import NoMatch from "./Components/NoMatch";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;