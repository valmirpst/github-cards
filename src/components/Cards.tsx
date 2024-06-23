import React from 'react';
import { Users } from '../types/Users';

const Cards = ({ usersList }: { usersList: string[] }) => {
  const [users, setUsers] = React.useState<Users[]>([]);

  async function fetchUsers() {
    usersList.forEach(async username => {
      const response = await fetch(`https://api.github.com/users/${username}`);
    });
  }

  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Cards;
