import React from 'react';
import Publication from './Publication';
import publications from './PublicationsData';
import { Filters } from './FiltersSorts';

function PublicationList({ typeOrdenation, filterActive}) {
  console.log(`type publication: ${typeOrdenation}`);
  const filteredPublications = filterActive ? Filters(publications, typeOrdenation, 0) : publications;

  return (
    <div id="rightContainerContent-1">
      {filteredPublications.map((publication, index) => (
        <Publication
          key={index}
          type={publication.type}
          title={publication.title}
          author={publication.author}
          imgSrc={publication.imgSrc}
          data={publication.data}
        />
      ))}
    </div>
  );
}

export default PublicationList;