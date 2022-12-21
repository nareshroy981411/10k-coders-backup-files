import logo from './logo.svg';
import './App.css';
import Students from './Components/Student';
import Employee from './Components/Employes';
import Header from './Components/Header';
import MainClassComp from './Components/MainClassComp';
// import Person from './form-Components/Ravans';
import Ravan from './form-Components/Ravans';
import LifeCycleA from './React-life-cycles/LifeCycleA';
import Practice from './React-life-cycles/Users';
// import User from './React-life-cycles/User'
import UsrsCrud from './react-functional-comps/UsrsCrud'
import { User } from './react-functional-comps/User';
import { Person } from './react-functional-comps/Person';
import Employees from './react-functional-comps/Employees'

function App() {
  return (
    <div className="App">
      {/* <Ravan/> */}
      {/* <User/> */}

      {/* <Students/>
      <Employee/>
      <Header/>
      <MainClassComp/> */}

      {/* <LifeCycleA/> */}
      {/* <Practice/> */}
      {/* <User/> */}

      <User/>
    <Person/>
    <Employees/>
    <UsrsCrud/>
    </div>
  );
}

export default App;
