import React from 'react';
import './App.scss';
import FacebookSVG from "./svg/facebook";
import InstgramSVG from "./svg/instagram";
import PinterestSVG from "./svg/pinterest";

function App() {
  return (
    <div className="wrapper">
      <div>
        <h2>We're Launching Soon</h2>
      </div>
      <div>Timer</div>
      <footer>
        <a href="#">
          <FacebookSVG/>
        </a>
        <a href="#">
          <InstgramSVG/>
        </a>
        <a href="#">
         <PinterestSVG/>
        </a>
      </footer>
    </div>
  );
}

export default App;
