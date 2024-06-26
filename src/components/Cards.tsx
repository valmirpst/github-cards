import React from 'react';
import { Users } from '../types/Global';
import Card from './Card';

const Cards = ({ usersList }: { usersList: string[] }) => {
  const [users, setUsers] = React.useState<Users[]>([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await Promise.all(
        usersList.map(async username => {
          const response = await fetch(`https://api.github.com/users/${username}`);
          const data = await response.json();
          return data;
        })
      );

      setUsers(usersData);
    };

    fetchUsers();
  }, [usersList]);

  return (
    <div className="h-full flex gap-2">
      {users.map(user => (
        <Card user={user} key={user.login} />
      ))}
    </div>
  );
};

export default Cards;
