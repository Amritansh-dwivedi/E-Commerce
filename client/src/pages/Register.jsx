import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../css/Register.css'; // Importing CSS

const Register = () => {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const submitHandler = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', form);
      login(res.data);
      navigate('/');
    } catch (err) {
      console.error(err);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create an Account</h2>
        <p className="subtitle">Join us and start shopping today!</p>
        
        <input 
          className="register-input" 
          placeholder="Full Name" 
          onChange={(e) => setForm({ ...form, name: e.target.value })} 
        />
        <input 
          className="register-input" 
          placeholder="Email Address" 
          onChange={(e) => setForm({ ...form, email: e.target.value })} 
        />
        <input 
          className="register-input" 
          placeholder="Password" 
          onChange={(e) => setForm({ ...form, password: e.target.value })} 
          type="password" 
        />
        
        <button className="register-btn" onClick={submitHandler}>
          Register
        </button>
        <p className="login-link">
          Already have an account? <span onClick={() => navigate('/login')}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
