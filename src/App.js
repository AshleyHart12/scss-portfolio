import './App.css';
import './Scss/style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Homepage from './Home';
import ContactForm from './Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} /> 
        <Route path='/home' element={<Homepage />} />
        <Route path='/contact' element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
