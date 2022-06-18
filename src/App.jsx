import React,{ useState } from 'react';
import './styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function App() {
  
  return (
    <Carousel>
                <div>
                    <img src={require('./21.jpg')}/>
                </div>
                <div>
                    <img src={require('./22.jpg')}  />
                </div>
                <div>
                    <img src={require('./23.jpg')}  />
                      </div>
            </Carousel>
  )
}

export default App;
