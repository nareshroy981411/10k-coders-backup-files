import logo from './logo.svg';
import './App.css';
import Main from "./Component/Main";
import { MyContextProvider } from "./Component/MyContext";

function App() {
  return (
    <div className="App">
    <MyContextProvider value={users}>
      <Main allUsers={users} />
      <Main/>
    </MyContextProvider>
    </div>
  );
}

export default App;
