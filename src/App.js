import { NavLink, Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Components/Home';
import About from './Pages/Components/About';
import Notfound from './Pages/Components/Notfound';
import Users from './Pages/Components/Users';
import Data from './Pages/Components/Data';
import ConditionalRouting from './Pages/Components/ConditionalRouting';


function App() {
  return (
    
    <div className="App">
      <div className='uldiv'>
      <ul>
        <li><NavLink  className='navlink' to='/'>Home</NavLink></li>
        <li><NavLink  className='navlink' to='/users'>Users </NavLink></li>
        <li><NavLink  className='navlink' to='/condition'> ConditionalRouting</NavLink></li>
        <li><NavLink  className='navlink' to='/about'>About </NavLink></li>
      </ul>
      </div>
      <header className="App-header">
        <h1>React-Router-Dom</h1>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/condition' element={<ConditionalRouting/>}/>
          <Route path='/users/:name' element={<Users/>}/>
          <Route path='/data' element={<Data/>}/>
          <Route path='/*' element={<Notfound/>}/>
          
        </Routes>
        
      </header>
    </div>
    
  );
}

export default App;
