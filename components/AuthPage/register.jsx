'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
  });

  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    // Fetch the CSRF token from your Laravel backend
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/sanctum/csrf-cookie`);
        if (response.status === 204) {
          setCsrfToken(getCookieValue('XSRF-TOKEN'));
        }
      } catch (error) {
        // Handle token fetch error
        console.error('Error fetching CSRF token:', error);
      }
    };
    fetchCsrfToken();
  }, []);

  const getCookieValue = (name) => {
    const match = document.cookie.match(new RegExp('(^ )' + name + '=([^;]+)'));
    if (match) {
      return match[2];
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, userData, {
        headers: {
          'X-XSRF-TOKEN': csrfToken,
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        // Handle successful registration
        console.log('User registered successfully');
      } else {
        // Handle registration error
        console.error('Failed to register user');
      }
    } catch (error) {
      // Handle request error
      console.error('Error registering user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;