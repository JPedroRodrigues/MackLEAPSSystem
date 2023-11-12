import React from 'react';

function IconButton({ id, iconSrc, altText, text, className }) {
  return (
    <button className={className} id={id}>
      <img src={iconSrc} alt={altText} />
      <p className="paragraphContent">{text}</p>
    </button>
  );
};

export default IconButton;