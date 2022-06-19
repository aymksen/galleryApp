import "./App.scss";

import { Gradient } from "whatamesh";





function App() {
  const gradient = new Gradient();
  gradient.initGradient("#gradient-canvas");
  return (
    
    <div className="App" >
      <div className="txt">Hello s world</div>
      <canvas id="gradient-canvas" data-transition-in />
      
    </div>
    
  );
 
}

export default App;
