import logo from './logo.svg';
import './App.css';
// import Users from './Component/form1/Users'
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import { Navbar } from './Component/form1/Navbar';
// import Layout from "./Component/form1/Layout";
// import Edituser from './Component/form1/Edituser';
// import Deleteuser from './Component/form1/Deleteuser'
// import Createuser from './Component/form1/Createuser';


// import Users from './Component/form2/Users'
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import { Navbar } from './Component/form2/Navbar';
// import Layout from "./Component/form2/Layout";
// import Edituser from './Component/form2/Edituser';
// import Deleteuser from './Component/form2/Deleteuser'
// import Createuser from './Component/form2/Createuser';

// import Users from './Component/form3/Users'
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import { Navbar } from './Component/form3/Navbar';
// import Layout from "./Component/form3/Layout";
// import Edituser from './Component/form3/Edituser';
// import Deleteuser from './Component/form3/Deleteuser'
// import Createuser from './Component/form3/Createuser';


// import Users from './Component/form4/Users'
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import { Navbar } from './Component/form4/Navbar';
// import Layout from "./Component/form4/Layout";
// import Edituser from './Component/form4/Edituser';
// import Deleteuser from './Component/form4/Deleteuser'
// import Createuser from './Component/form4/Createuser';

import Users from './Component/form5/Users'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Navbar } from './Component/form5/Navbar';
import Layout from "./Component/form5/Layout";
import Edituser from './Component/form5/Edituser';
import Deleteuser from './Component/form5/Deleteuser'
import Createuser from './Component/form5/Createuser';

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Users/>}/>
      <Route path="/edit/:id" element={<Edituser/>}/>
      <Route path="/delete/:id" element={<Deleteuser/>}/>
      <Route path="/create" element={<Createuser/>}/>
    </Route>
    </Routes>
    </BrowserRouter>

    );
}

export default App;
