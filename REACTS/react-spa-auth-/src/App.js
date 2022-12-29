import logo from "./logo.svg";
import "./App.css";
import { AuthProvider } from "./Components/Auth";
import LoginComp from "./Components/LoginComp";
import Navbar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <AuthProvider >
        <h2>Hello World from Auth Project</h2>
        <LoginComp/>  
      </AuthProvider>
    </div>
  );
}

export default App;