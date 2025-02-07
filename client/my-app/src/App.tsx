import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar'
import Hero from './components/hero';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx auto pt-20 px-6">
      <Hero />
      </div>
    </Router>
  );
}

export default App;