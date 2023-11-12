import React from 'react';
import IconButton from './IconButton';


function ButtonSection({ id, buttons }) {
  return (
    <div id={id}>
      <div className="btnStruct">
        {buttons.map((button) => (
          <IconButton
            key={button.id}
            id={button.id}
            iconSrc={button.iconSrc}
            altText={button.altText}
            text={button.text}
            className={button.className}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonSection;