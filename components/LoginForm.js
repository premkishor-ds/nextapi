// components/LoginForm.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { loginUser } from '../utils/api';

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Call your login API
      await loginUser({ email, password });
      // Redirect to home page after successful login
      router.push('/');
    } catch (error) {
      console.error('Login failed', error);
      // Handle login error
    }
  };

  return (
    <div>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
