import logo from './logo.svg';
import './App.css';
import {useState} from 'react';




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

//displaying data
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

//conditional rendering and rendering lists
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

//Updating the screen
function MyButton2() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
//Sharing data between components
function MyButton3({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}


function App() {

  //sharing data between components
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }


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

      <div>
        <Profile/>
      </div>

      <div>
        <ShoppingList/>
      </div>

      <div>
        <MyButton2/>
        <MyButton2/>
      </div>

      <div>
      <h1>Counters that update together</h1>
      <MyButton3 count={count} onClick={handleClick} />
      <MyButton3 count={count} onClick={handleClick} />
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
