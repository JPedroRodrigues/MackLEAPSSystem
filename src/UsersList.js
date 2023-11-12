import React from 'react';
import User from './Users';
import users from './UserData';
import { Filters } from './FiltersSorts';

function UserList({ typeOrdenation, filterActive }) {
  console.log(`type users: ${typeOrdenation}`);
  const filteredUsers = filterActive ? Filters(users, typeOrdenation, 1) : users;

  return (
    <div id="rightContainerContent-2">
      {filteredUsers.map((user, index) => (
        <User
          key={index}
          name={user.name}
          type={user.type}
          role={user.role}
          imageSrc={user.imageSrc}
          data={user.data}
        />
      ))}
    </div>
  );
}

export default UserList;