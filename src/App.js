import { useEffect } from 'react';
import './App.css';
import './Scss/style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import ParallaxPage from './parallax';
import {keepTheme} from './Toggletheme';

function App() {
  useEffect(() => { 
    keepTheme();
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} /> 
        <Route path='/home' element={<ParallaxPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
