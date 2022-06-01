import React from 'react';
import './App.css';
import Header from './Header';
import Api from './component/Api';
import Search from './component/Search';
import DropdownMenu from './component/DropdownMenu';
import DarkLight from './component/DarkLight';


function App() {



// display data on the DOM

  return (<>
  <div>
      <div className="App">
        <div className='header'>
          < Header />
        </div> 
        <div className='wrapper'>
          <div className='search-drop'>
            < Search />
            < DropdownMenu />
          </div>
        </div>
        
        <div className='wrapper main-container'>
            <Api />
        </div>
      </div>
    </div>
  </>
    
  );
}

export default App;
