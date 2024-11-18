// src/components/ProfileInfo.jsx
import React from 'react';
import {Logout, Edit} from '../assets'
import {Button, ProfileImg} from './index'


function ProfileInfo({ name, avatarUrl, onEditProfile, onSignOut, className }) {
  return (
    <div className={className}>
      <ProfileImg src={avatarUrl} alt="User Profile" size={130} className={'mb-5'}/>
      <h2>Welcome Back, <strong>{name}</strong></h2>
      <Button onClick={onEditProfile} 
        className={'py-2 bg-gray-600 w-36 m-2 mt-4 rounded-lg flex justify-center items-center gap-2 hover:translate-y-1 hover:bg-gray-400'}  
        title="Edit"> 
        <img src={Edit} alt="edit" />
        Edit Profile
      </Button>
      <Button onClick={onSignOut} 
        className={'py-2 bg-red-600 w-36  rounded-lg flex justify-center items-center gap-2 hover:translate-y-1 hover:bg-red-400'}  
        title="Sing Out"> 
        <img src={Logout} alt="logout" /> 
        Sign Out
      </Button>
    </div>
  );
}

export default ProfileInfo;
