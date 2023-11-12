import React from 'react';

function Publication({ type, title, author, imgSrc, data}) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className="btnContent-3" onClick={scrollToTop}>
      <img src={imgSrc} alt="Publicacoes_logo" />
      <div className="contentDescription">
        <p className="paragraphContent-2"><b>Título: </b>{title}</p>
        <p className="paragraphContent-2"><b>Tipo: {type}</b></p>
        <p className="paragraphContent-2"><b>Autor(a): </b>{author}</p>
        <p className="paragraphContent-2"><b>Data: </b>{data}</p>
      </div>
    </button>
  );
}

export default Publication;