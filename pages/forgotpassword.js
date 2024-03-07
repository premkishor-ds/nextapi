// pages/forgotpassword.js
import React, { useState } from 'react';
import { forgotPassword } from '../utils/api';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      // Call your forgot password API
      await forgotPassword({ email });
      // Handle successful forgot password request (e.g., display a success message)
      console.log('Forgot password request successful');
    } catch (error) {
      console.error('Forgot password request failed', error);
      // Handle forgot password request error (e.g., display an error message)
    }
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button onClick={handleForgotPassword}>Reset Password</button>
    </div>
  );
};

export default ForgotPasswordPage;
