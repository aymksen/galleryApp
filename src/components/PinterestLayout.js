import { React , useState ,useEffect } from "react";
import "./pin.scss";
import { pins } from "./data/data.js";
export default function PinterestLayout() {

  
  const [data, setData] = useState([]);
  useEffect(() => { 
      setData(pins);
  },[]);

  return (
    <div className="picContainer">
      
   {data.map((id) => (
          <div className={"pin " + (id.style)}>
            <img id="img" src={id.img} alt="" />
        
          </div>
        ))}

    </div>
  );
}
