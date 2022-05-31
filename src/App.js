 import './App.css';
import Header from './Header';
import Api from './component/Api';
import Search from './component/Search';
import DropdownMenu from './component/DropdownMenu';
import DarkLight from './component/DarkLight';
import useLocalStorage from 'use-local-storage'

function App(props) {

// display data on the DOM

  return (
    <div id={ props.them }>
      <div className="App">
        <div className='header'>
          < Header />
          < DarkLight />
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

  );
}

export default App;
