import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Header from './Header';
import './App.css';






function App() {


const url = `https://restcountries.com/v2/all`;

function Api() {

const [flag, setFlag] = useState([]);

    const fetchCountryData = async() => {
        const response = await fetch(url);
        const flagData = await response.jason();
        setFlag(flag)
        return console.log(flagData)
    }
    fetchCountryData()
}

Api()


  return (
    <div className="App">
      < Header />
      <div>
        
      </div>
    </div>
  );
}

export default App;
