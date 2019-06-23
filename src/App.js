import React from 'react';
import logo from './logo.svg';
import marble from './marble.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://codejoy-wins.itch.io/explorer">
          <img src={marble} className="App-logo" alt="logo" />
        </a>
          <p>
          k and m to rise and fall.  wasd to move left, right, up and down.
          </p>
        <iframe id="vid" width="560" height="315" src="https://www.youtube.com/embed/jeo3an2M_Lo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </header>
      <h2>Some Space</h2>
      <p>I like react because I like making apps quickly from scratch. The problem is that I don't remember all the little tricks I've learned.  One thing I've done is make the logo a different svg file.  I guess I can just use an img tag and then make it spin by giving it a class of app-logo.</p>
      <p>I want to use best practices but it's hard to remember everything.  Hopefully this looks nice.</p>
    <a href="https://maxjann.com">MJ</a>
    </div>
  );
}

export default App;
