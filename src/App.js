import './App.css';
import './style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Homepage from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} /> 
        <Route path='/home' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
