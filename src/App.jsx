import "./App.scss";
import { Gradient } from "whatamesh";

const gradient = new Gradient();
gradient.initGradient("#gradient-canvas");

function App() {
  return (
    <div className="App">
      <canvas id="gradient-canvas"></canvas>
      <div className="txt">Hesssllo</div>
    </div>
  );
}

export default App;
