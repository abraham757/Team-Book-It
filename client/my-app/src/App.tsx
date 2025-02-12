import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/Home_API';
import Features from './components/features';
import Login from './pages/Login';
import Register from './pages/Register';
import BookSearch from './pages/BookSearch';
import HeroSection from './components/heroSection';

const API_URL = import.meta.env.VITE_API_URL || "https://team-book-it-13rh.onrender.com";


function Home() {
  const location = useLocation();
  return (
    <>
      <HeroSection />
      <Hero />
      {location.pathname === '/' && <Features /> }
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="mx-auto pt-20 px-6 w-full">
        <Routes>
          <Route path="${API_URL}/" element={<Home />} />
          <Route path="${API_URL}/login" element={<Login />} />
          <Route path="${API_URL}/register" element={<Register />} />
          <Route path="${API_URL}/search" element={<BookSearch />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;