import logo from './logo.svg';
import './App.css';
//import {useState} from 'react';




function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

//Writing markup with jsx
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      <div>
        <MyButton/>
      </div>

      <div>
        <AboutPage/>
      </div>

      <img className="avatar" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
