import "./App.scss";

import { Gradient } from "whatamesh";

const gradient = new Gradient();
gradient.initGradient("#gradient-canvas");



function App() {
  
  return (
    <div className="App" >
      <div className="txt">Hello world</div>
      <canvas id="gradient-canvas" ></canvas>
      
     
    </div>
    
  );
 
}

export default App;
