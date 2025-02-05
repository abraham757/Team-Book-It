import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/" style={styles.link}>Placeholder</Link>
      </div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.link}>About</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/services" style={styles.link}>Services</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontSize: '24px',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
  },
  navItem: {
    margin: '0 15px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '18px',
  }
};

export default Navbar;
