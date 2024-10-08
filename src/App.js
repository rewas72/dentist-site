import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Doctors from './components/Doctors';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import WhatsappLogo from './components/WhatsappLogo';

function App() {
  return (
    <div className='font-primary overflow-x-hidden '>
        <Navbar  />
        <Hero />
        <Services />
        <About />
        <Doctors />
        <WhatsappLogo/>
        <Contact/>
        <Footer />
    </div>
  );
}

export default App;
