import React from 'react';
import ButtonSection from './ButtonSection';

function Button2() {
  const section3Buttons = [
    {
      id: 'btnContentId4',
      text: 'MAIS RECENTES',
      className: 'btnContent-2',
    },
    {
      id: 'btnContentId5',
      text: 'MAIS ANTIGOS',
      className: 'btnContent-2',
    },
    {
      id: 'btnContentId6',
      text: 'ORDEM ALFABÉTICA',
      className: 'btnContent-2',
    },
  ];
  
  return (
    <ButtonSection id="leftContainerContent-3" buttons={section3Buttons} />
  );
}

export default Button2;