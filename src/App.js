import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import APIURL from './apiendpoint'

function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch(`${APIURL}/todos`)
    .then(res => res.json())
    .then(data => {
      setTasks(data)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {tasks.map(t => <li key={t.id}>{t.task}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
