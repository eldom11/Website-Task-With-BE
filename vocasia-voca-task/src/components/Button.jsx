import React from 'react';

function Button({ onClick, children, title, className }) {
  return (
    <button className={className} onClick={onClick} title={title}>
      {children}
    </button>
  );
}

export default Button;
