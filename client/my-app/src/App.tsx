import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/Home_API';
import Features from './components/features';
import Login from './pages/Login';
import Register from './pages/Register';
import BookSearch from './pages/BookSearch';
import HeroSection from './components/heroSection';




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
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<BookSearch />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;