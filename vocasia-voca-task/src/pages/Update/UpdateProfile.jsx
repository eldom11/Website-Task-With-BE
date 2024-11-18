import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {ProfileImg, Input, Button} from '../../components'
import {Back, Profile} from '../../assets'

function UpdatePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');
    const storedAvatarUrl = localStorage.getItem('avatarUrl');
    const storedPassword = localStorage.getItem('password');

    if (storedName) setName(storedName);
    if (storedEmail) setEmail(storedEmail);
    if (storedAvatarUrl) setAvatarUrl(storedAvatarUrl);
    if (storedPassword) setPassword(storedPassword);
  }, []);

  const handleSaveProfile = () => {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('avatarUrl', avatarUrl);
    localStorage.setItem('password', password);
    alert('Profil disimpan');
  };

  const handleBackToTaskPage = () => {
    navigate('/task');
  };

  return (
    <div className="bg-gradient-to-tr from-fuchsia-950 via-emerald-700 to-neutral-900 w-screen h-screen flex justify-center items-center">
      <div className="bg-stone-900/40 w-auto pt-6 px-12 pb-8 rounded-lg">
        <div className='flex justify-start items-center gap-4 -ml-5 mb-6'>
          <Button onClick={handleBackToTaskPage} title="Back"> <img src={Back} alt="Back" /></Button>
          <h3 className='text-white font-semibold'> Edit Profile </h3>
        </div>

        <div className="text-white">
          <ProfileImg src={avatarUrl || Profile} className={'justify-self-center m-5'} alt="User ProfileImg" size={120} />

          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label>Profile URL</label>
              <Input
                type="url"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
                placeholder="<Image URL>"
                className="bg-transparent focus:bg-emerald-900 focus:outline-none border-zinc-900 border-2 focus:border-4 rounded-lg w-96 mt-2 mb-5 text-gray-400 focus:text-white"
              />
            </div>
            <div>
              <label>Name</label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="bg-transparent focus:bg-emerald-900 focus:outline-none border-zinc-900 border-2 focus:border-4 rounded-lg w-96 mt-2 mb-5 text-gray-400 focus:text-white"
              />
            </div>
            <div>
              <label>Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent focus:bg-emerald-900 focus:outline-none border-zinc-900 border-2 focus:border-4 rounded-lg w-96 mt-2 mb-5 text-gray-400 focus:text-white"
              />
            </div>
            <div>
              <label>Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="bg-transparent focus:bg-emerald-900 focus:outline-none border-zinc-900 border-2 focus:border-4 rounded-lg w-96 mt-2 mb-5 text-gray-400 focus:text-white"
              />
            </div>
            <Button className="w-full bg-gradient-to-tr from-neutral-950 via-emerald-700 to-neutral-900 p-2 rounded-md border-purple-400 border-2 mt-2 flex justify-center items-center gap-2 font-bold hover:translate-y-1 hover:bg-gradient-to-tr hover:from-neutral-600 hover:via-emerald-400 hover:to-neutral-500" onClick={handleSaveProfile} title="Save">
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8334 1L4.50002 8.33333L1.16669 5" stroke="#FFFFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdatePage;
