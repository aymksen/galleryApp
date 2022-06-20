import "./App.scss";
import PinterestLayout from "./components/PinterestLayout";


function App() {
  
  return (
      <div className="App">
          <a href="https://www.instagram.com/phogotrafy"  target="_blank" rel="noreferrer">
      <div className="txt">Gallery</div></a>
      <div className="container" >
      <PinterestLayout/>
      </div>
      </div>
  );
 
}

export default App;
