import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>CarpoolMate</h2>
      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/driver">Driver</Link>
        <Link to="/rider">Rider</Link>
        <Link to="/trips">Trips</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#f0f0f0',
    borderBottom: '1px solid #ccc',
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
};

export default Navbar;
