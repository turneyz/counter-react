import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter/Counter.js';

function App() {
  return (
    <div className="App">
      <Counter />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my Basic Counter page, this is my first react project, let's see what's next!
        </p>
        <Counter />
      </header>
    </div>
  );
}

export default App;
