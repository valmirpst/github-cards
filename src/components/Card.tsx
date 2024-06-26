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
    <div className="max-w-[350px]">
      <div className="h-[160px] w-full bg-[url('https://unblast.com/wp-content/uploads/2021/01/Space-Background-Images.jpg')] bg-cover bg-no-repeat"></div>

      <section className="relative">
        <div className=" w-[120px] rounded-full overflow-hidden border-[#fafafa] border-[6px] box-border absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img className="" src={`https://github.com/${user.login}.png`} alt="" />
        </div>
        <h1>{user.name}</h1>
        <p>{user.login}</p>
      </section>

      <section>
        <h3>REPOSITORIOS</h3>
        {repos.map(repo => {
          return (
            <div className="" key={repo.name}>
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
