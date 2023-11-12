import React from 'react';
import ButtonSection from './ButtonSection';

function Button1() {
  const section2Buttons = [
    {
      id: 'btnContentId1',
      iconSrc: '/images/Publicações_Icon.png',
      altText: 'Publicacoes_logo',
      text: 'PUBLICAÇÕES',
      className: 'btnContent-1',
    },
    {
      id: 'btnContentId2',
      iconSrc: '/images/personas.png',
      altText: 'User_logo',
      text: 'USUÁRIOS',
      className: 'btnContent-1',
    },
    {
      id: 'btnContentId3',
      iconSrc: '/images/shakehand.png',
      altText: 'Shakehand_logo',
      text: 'COLABORADORES',
      className: 'btnContent-1',
    },
  ];

  return (
    <ButtonSection id="leftContainerContent-2" buttons={section2Buttons} />
  );
};

export default Button1;