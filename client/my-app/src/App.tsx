import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Navbar from './components/navbar'
import Login from './components/login'
import Description from './components/description';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Login />
      <Description />
      {/* other components/routes */}
    </Router>
  );
}

export default App;