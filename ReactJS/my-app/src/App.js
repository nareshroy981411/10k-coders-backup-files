 import ABC from './Components/MultipleFunctionalComponents'
 import { ParentComponent,ChildComponent } from './Components/MultipleFunctionalComponents'
function App() {
  return (
    <div className="App">
    <ABC/>
    <ChildComponent/>
    <ParentComponent/>
    </div>
  );
  
}

export default App;