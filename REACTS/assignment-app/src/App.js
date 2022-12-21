import logo from './logo.svg';
import './App.css';
import Task1 from './Form Components/Task1';
import Task2 from './Form Components/Task2';
import Task3 from './Form Components/Task3';
import Task4 from './Form Components/Task4';
import Task5 from './Form Components/Task5';
import AddressDetails from './Lifecycle Forms/Form4 ';
import Person from './Lifecycle Forms/Form1';
import Registration from './Lifecycle Forms/Form2';
import Tender from './Lifecycle Forms/Form5';

function App() {
  return (
    <div className="App">
      {/* <Task1/>
      <Task2/>
      <Task3/> 
      <Task4/>
      <Task5/> */}

      {/* <AddressDetails/>
      <Person/> */}
      <Registration/>
      <Tender/>

    </div>
  );
}

export default App;
