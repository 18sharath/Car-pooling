import React, { useState } from 'react';
import axios from 'axios';

const RiderForm = () => {
  const [form, setForm] = useState({
    name: '',
    destination: 'Shivamogga',
    phone: '',
    date: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/rider', form);
      alert('Rider registered!');
    } catch (err) {
      console.error(err);
      alert('Error submitting form');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="phone" placeholder="Phone" onChange={handleChange} required />
      <input name="date" type="date" onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RiderForm;
