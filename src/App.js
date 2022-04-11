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
      <div className='catch-phrase'>
        <h2 className='learning'>
          Ready to enhance your learning?
        </h2>
        <button className='cta-big'>Contact Us &#8594;</button>
      </div>
    </>
  );
}

export default App;
