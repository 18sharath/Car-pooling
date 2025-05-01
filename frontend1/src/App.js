import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import DriverForm from './pages/DriverForm/DriverForm';
import RiderForm from './pages/RiderForm/RiderForm';
import Trips from './pages/Trips/Trips';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/driver" element={<DriverForm />} />
          <Route path="/rider" element={<RiderForm />} />
          <Route path="/trips" element={<Trips />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
