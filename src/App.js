import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Header from './Header';
import './App.css';
import Api from './component/Api';


function App() {


  return (
    <div className="App">
      < Header />
        <div className='wrapper main-container'>
          <Api />
        </div>
    </div>
  );
}

export default App;
