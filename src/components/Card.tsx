import React from 'react';
import { Repos, Users } from '../types/Global';

const Card = ({ user }: { user: Users }) => {
  const [repos, setRepos] = React.useState<Repos[]>([]);

  React.useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(`https://api.github.com/users/${user.login}/repos`);
      const data: Repos[] = await response.json();
      setRepos(data);
    }
    fetchRepos();
  }, []);

  return (
    <div>
      <div className="user-background">
        <img src="" alt="" />
      </div>

      <section>
        <div>
          <img src={`https://github.com/${user.login}.png`} alt="" />
        </div>
        <h1>{user.name}</h1>
        <p>{user.login}</p>
      </section>

      <section>
        <h3>REPOSITORIOS</h3>
        {repos.map(repo => {
          return (
            <div key={repo.name}>
              <p>{repo.name}</p>
              <p>{repo.description}</p>
              <p>{repo.language}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Card;
