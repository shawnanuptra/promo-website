import './App.css';
import Navbar from './components/Navbar';
import hero from './pics/hero.jpg';
import Hero from './components/Hero';
import Goal from './components/Goal';

function App() {

  return (
    <>
      <Navbar curPage='home' />
      <Hero />
      <Goal />
    </>
  );
}

export default App;
