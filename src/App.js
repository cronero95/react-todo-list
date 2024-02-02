import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import ToDo from './components/ToDo';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-wrapper'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='FreeCodeCamp logo'
        />
      </div>
      <div className='todo-list-wrapper'>
        <h1>My ToDo List</h1>
        <ToDo
          text = 'Learn React'
        />
      </div>
    </div>
  );
}

export default App;
