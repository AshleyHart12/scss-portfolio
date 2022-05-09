import './App.css';
import './Scss/style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import ParallaxPage from './parallax';
// import ContactForm from './Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} /> 
        <Route path='/home' element={<ParallaxPage />} />
        {/* <Route path='/contact' element={<ContactForm />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
