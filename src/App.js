 
import Header from './Header';
import './App.css';
import Api from './component/Api';


function App() {

// display data on the DOM

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
