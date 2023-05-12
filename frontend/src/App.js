import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import 'axios'
import axios from 'axios';
import configProd from './config.prod';
import configDev from './config.dev';

let BASE_URL = ""

if (process.env.NODE_ENV == 'production') {
  BASE_URL = configProd.BASE_URL
} else {
  BASE_URL = configDev.BASE_URL
}

function App() {
  const [backendHealthy, setBackendHealthy] = useState("not ok")

  useEffect(()=>{
    const intervalId = setInterval(async () => {  //assign interval to a variable to clear it.
      console.log(process.env)
      console.log(BASE_URL)
      const resp = await axios.get(`${BASE_URL}/api/health`)

      setBackendHealthy(resp.data?.health || "not ok")

    }, 1000)
    
    return () => clearInterval(intervalId); //This is important
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Backend Health: {backendHealthy}
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
