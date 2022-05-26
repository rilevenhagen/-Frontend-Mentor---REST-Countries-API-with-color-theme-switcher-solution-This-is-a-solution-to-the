import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Header from './Header';
import './App.css';
import Api from './component/Api';


function App(props) {


  return (
    <div className="App">
      < Header />
      <div className="App">
        <div className='data'>
          <Api />
          {props.flag.map(element => {
              return(
                <div>
                  <p>{element.name}</p>
                </div>
              )
            })}
        </div>
      
      </div>
    </div>
  );
}

export default App;
