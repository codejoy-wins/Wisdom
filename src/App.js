import React from 'react';
import marble from './marble.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <h3>Click on the game to play, music to listen, or scroll down to read.</h3>
        <a href="https://codejoy-wins.itch.io/explorer">
          <img src={marble} className="App-logo" alt="logo" />
        </a>
          <p>
          k and m to rise and fall.  wasd to move left, right, up and down.
          </p>
        <iframe id="vid" width="560" height="315" src="https://www.youtube.com/embed/jeo3an2M_Lo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </header>
      <h2>Some Space</h2>
      <p>You are dead. The trial will begin shortly. The Devil is the prosecutor, and Jesus Christ is your defense attorney. God will be the judge, and no superpowers are allowed in his courtroom. </p><p>

      The courtroom is similar to an American styled courtroom but glistening with white and gold.  
      </p><p>
      
      
      “All rise” - Said the Lord thy God
      
      
      </p><p>
      Everyone stands up and does whatever people do in your current time so you can understand the process.
      
      </p><p>
      
      Jesus goes over your good deeds and how you are innocent until proven guilty. 
      </p><p>
      The Devil goes into detail about all the horrible things you’ve done and thought about doing if only you had the power you’d have in heaven.
      </p><p>
      Jesus forgives you and defends you until the end of time.
      </p><p>
      God does not forgive, but is just. He listens to both the devil and Jesus, and his jury of angels.  
      
      Then he determines whether you go to heaven or hell or something else. 
      
      How do you think this trial will go for you?  </p>
    <a href="https://maxjann.com">MJ</a>
    </div>
  );
}

export default App;
