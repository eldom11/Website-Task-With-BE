import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Input, Button} from '../../components'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (email && password) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      navigate('/task');
    } else {
      alert('Email and password are required!');
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-tr from-fuchsia-950 via-emerald-700 to-neutral-900 flex justify-center items-center">
      <div className="w-auto h-96 bg-zinc-900/60 p-8 rounded-md ">
        <h1 className="text-center text-2xl font-bold text-emerald-500 mt-4">VOCA</h1>
        <h1 className="text-center text-xl text-white mb-2">Task</h1>

        <label htmlFor="email" className="text-white my-2">Email</label>
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="bg-gray-700 focus:bg-emerald-900 focus:outline-none border-zinc-900 border-2 focus:border-4 rounded-lg w-96 mt-2 mb-5 text-gray-400 focus:text-white" 
        />
        
        <label htmlFor="password" className="text-white">Password</label>
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="bg-gray-700 focus:bg-emerald-900 focus:outline-none border-zinc-900 border-2 focus:border-4 rounded-lg w-96 mt-2 mb-5 text-gray-400 focus:text-white" 
        />

        <Button className={'p-2 w-full bg-gradient-to-tr from-neutral-950 via-emerald-700 to-neutral-900 text-white mt-4 w-full rounded-lg flex justify-center items-center gap-2 font-bold hover:translate-y-1 hover:bg-gradient-to-tr hover:from-neutral-600 hover:via-emerald-400 hover:to-neutral-500'} onClick={handleSignIn}  title="Sign In">
          <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8334 1L4.50002 8.33333L1.16669 5" stroke="#FFFFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Sign In
        </Button>
      </div>
    </div>
  );
}


export default Login;
