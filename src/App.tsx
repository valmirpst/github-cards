import React from 'react';
import Cards from './components/Cards';
import SearchForm from './components/SearchForm';

const App = () => {
  let usersLocal = window.localStorage.getItem('users');
  const [usersList, setUsersList] = React.useState<string[]>(
    usersLocal ? JSON.parse(usersLocal) : []
  );

  return (
    <div className="App">
      <header className="">
        <SearchForm setUsersList={setUsersList} />
      </header>
      <main>
        <Cards usersList={usersList} />
      </main>
    </div>
  );
};

export default App;
