import './App.css';
import Navbar from './components/Navbar';
import hero from './pics/hero.jpg';
import Hero from './components/Hero'
function App() {

  const heroStyle = {
    position: 'relative',
    zIndex: '-2',
    width: '80%',
    top: '-20%'
  }

  return (
    <>
      <Navbar curPage='home' />
      <Hero />
    </>
  );
}

export default App;
