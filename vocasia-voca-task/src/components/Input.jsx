import React from 'react';

function Input({ type, value, onChange, placeholder, id, name, className }) {
  return (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          padding: '5px',
          fontSize: '16px'
        }}
        className={className}
      />
    </div>
  );
}

export default Input;
