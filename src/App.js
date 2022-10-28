import './App.css';
import { GroceryList } from './GroceryList';
import list from './list.webp';
import man from './man.webp';


function App() {
  return (
    <div className='app'>
      <div className="container">
        <img src={list} width='200px' alt='grocery list'/>
      </div>
      <div className="container">
    <h1>GROCERY LIST</h1>
    </div>
    <div className="container">
      < GroceryList />
      </div>        
        <div className="container">
          <img src={man} width='200px' alt='man'/>
          </div>

    </div>
  );
}

export default App;
