import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Goal from './components/Goal';
import Ingredients from './components/Ingredients';

function App() {

  return (
    <>
      <Navbar curPage='home' />
      <Hero />
      <Goal />
      <Ingredients />
    </>
  );
}

export default App;
