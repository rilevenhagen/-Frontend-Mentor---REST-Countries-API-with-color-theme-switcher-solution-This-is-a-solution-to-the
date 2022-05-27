 
import Header from './Header';
import './App.css';
import Api from './component/Api';
import Search from './component/Search';
import DropdownMenu from './component/DropdownMenu';


function App() {

// display data on the DOM

  return (
    <div className="App">
      <div>
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
  );
}

export default App;
