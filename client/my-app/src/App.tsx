import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar'
import Hero from './components/hero';
import Features from './components/features';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="mx auto pt-20 px-6 w-full">
      <Hero />
      <Features />
      </div>
    </Router>
  );
}

export default App;