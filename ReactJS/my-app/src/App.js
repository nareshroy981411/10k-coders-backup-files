//  import ABC from './Components/MultipleFunctionalComponents'

import MainClassComponent, { ChildClassComponent, SiblingChildClassComp } from "./Components/MultipleClassComponents";

//  import { ParentComponent,ChildComponent } from './Components/MultipleFunctionalComponents'
function App() {
  return (
    <div className="App">
    {/* <ABC/>
    <ChildComponent/>
    <ParentComponent/> */}
    <MainClassComponent/>
    <ChildClassComponent/>
    <SiblingChildClassComp/>
    </div>
  );
  
}

export default App;