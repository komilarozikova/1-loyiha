import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes >
        <Route path="/" element={ <Gallery /> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/>} />
      </Routes>
    </div>
    
  );
}

export default App;
