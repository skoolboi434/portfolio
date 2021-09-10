import React from 'react';

function CustomButton({ className, buttonText, buttonURL }) {
  return (
    <a href={buttonURL} className={`button button-primary ${className}`}>
      {buttonText}
    </a>
  );
}

export default CustomButton;
