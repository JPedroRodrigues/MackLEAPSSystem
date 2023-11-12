import React from 'react';
import Collaborator from './Collaborators';
import collaborators from './CollaboratorsData';
import { Filters } from './FiltersSorts';

function CollaboratorList({ typeOrdenation, filterActive }) {
  console.log(`type colaboradores: ${typeOrdenation}`);
  const filteredCollaborators = filterActive ? Filters(collaborators, typeOrdenation, 1) : collaborators;
  return (
    <div id="rightContainerContent-3">
      {filteredCollaborators.map((collaborator, index) => (
        <Collaborator
          key={index}
          name={collaborator.name}
          type={collaborator.type}
          category={collaborator.category}
          imageSrc={collaborator.imageSrc}
          data={collaborator.data}
        />
      ))}
    </div>
  );
}

export default CollaboratorList;