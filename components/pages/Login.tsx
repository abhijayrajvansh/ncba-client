'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const Login = () => {
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const mockEmail = 'user@example.com';
    const mockPassword = 'password123';

    if (email === mockEmail && password === mockPassword) {
      localStorage.setItem('isAuthenticated', 'true');
      // here to redirect to sit create subscription page
      router.push('/products'); 
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center container mx-auto justify-center bg-gray-100 p-10">
      <form onSubmit={handleLogin} className="p-6 bg-white dark:bg-card shadow-md rounded-lg w-[500px] px-10">
        <h1 className='text-3xl text-blue-900 font-semibold py-3 mb-5'>Login</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-foreground">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring focus:ring-ring"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-foreground">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring focus:ring-ring"
            placeholder="Enter your password"
            required
          />
        </div>
        <Button
          type="submit"
          className='w-full'
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
