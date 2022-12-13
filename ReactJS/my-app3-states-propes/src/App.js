import logo from './logo.svg';
import './App.css';
import Students from './Components/Student';
import Employee from './Components/Employes';
import Header from './Components/Header';
import MainClassComp from './Components/MainClassComp';

function App() {
  return (
    <div className="App">
      <Students/>
      <Employee/>
      <Header/>
      <MainClassComp/>
    </div>
  );
}

export default App;
