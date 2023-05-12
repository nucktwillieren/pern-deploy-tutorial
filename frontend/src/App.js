import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import 'axios'
import axios from 'axios';

function App() {
  const [backendHealthy, setBackendHealthy] = useState("not ok")

  useEffect(()=>{
    const intervalId = setInterval(async () => {  //assign interval to a variable to clear it.
      const resp = await axios.get("http://localhost:8000")

      setBackendHealthy(resp.data?.healthy || "not ok")
      console.log(backendHealthy)

    }, 5000)
    
    return () => clearInterval(intervalId); //This is important
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Backend Healthy: {backendHealthy}
        </p>
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
