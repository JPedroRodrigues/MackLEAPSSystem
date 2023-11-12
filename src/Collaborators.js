import React from 'react';

function Collaborator({ name, type, category, imageSrc, data }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className="btnContent-3" onClick={scrollToTop}>
      <img src={imageSrc} alt="Collaborators_logo" />
      <div className="contentDescription">
        <p className="paragraphContent-2"><b>Nome: </b>{name}</p>
        <p className="paragraphContent-2"><b>Tipo: {type}</b></p>
        <p className="paragraphContent-2"><b>Categoria: </b>{category}</p>
        <p className="paragraphContent-2"><b>Data: </b>{data}</p>
      </div>
    </button>
  );
}

export default Collaborator;