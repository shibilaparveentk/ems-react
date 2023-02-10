
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
     
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path ='/add' element={<Add/>}/>
          <Route path ='/update' element={<Update/>}/>

        </Routes>
      
    </div>
  );
}

export default App;
