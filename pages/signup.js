// pages/signup.js
import React, { useState } from 'react';
import { signupUser } from '../utils/api';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Call your signup API
      await signupUser({ email, password });
      // Redirect or handle successful signup
      console.log('Signup successful');
    } catch (error) {
      console.error('Signup failed', error);
      // Handle signup error (e.g., display an error message)
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default SignupPage;
