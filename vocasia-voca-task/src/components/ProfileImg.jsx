import React from 'react';

function ProfileImg({ src, alt, size = 50, className }) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      style={{
          width: `${size}px`, 
          height: `${size}px`, 
          borderRadius: '50%', 
          objectFit: 'cover'
      }} 
    />
  );
}

export default ProfileImg;
