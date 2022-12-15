import logo from './logo.svg';
import './App.css';
import Students from './Components/Student';
import Employee from './Components/Employes';
import Header from './Components/Header';
import MainClassComp from './Components/MainClassComp';
import Person from './form-Components/Ravans';
import User from './form-Components/User';
import Ravan from './form-Components/Ravans';

function App() {
  return (
    <div className="App">
      <Ravan/>
      {/* <User/> */}
      {/* <Students/>
      <Employee/>
      <Header/>
      <MainClassComp/> */}
    </div>
  );
}

export default App;
