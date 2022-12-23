import logo from "./logo.svg";
import "./App.css";
import Users from "./Component/Users";
import {BrowserRouter,Route,Routes,} from 'react-router-dom'
import Layout from "./Component/Layout";
import EditUser from "./Component/EditUser";
import Deleteuser from "./Component/Deleteuser";
import CreateUser from "./Component/CreateUser";
function App() {
  return (
    <div className="App">

     <Users/>
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout/>}>
    //       <Route path="/edit" element={<EditUser/>}/>
    //       <Route path="/delete" element={<Deleteuser/>}/>
    //       <Route path="/create" element={<CreateUser/>}/>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;