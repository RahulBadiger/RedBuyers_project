import './global.css';
import Nav from './components/Navbar/Nav';
import Home from './components/Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Browse from './components/Pages/Browse';

function App() {
  return (
    <div>
      <Nav/>
      <BrowserRouter>
      <Routes>

    <Route path='/' element={<Home />}/>
    <Route path='/browse' element={<Browse />}/>

      </Routes>
      
      
      </BrowserRouter>
    
    </div>
  )
}

export default App;
