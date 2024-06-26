import React from 'react';
import Cards from './components/Cards';
import SearchForm from './components/SearchForm';

const App = () => {
  let usersLocal = window.localStorage.getItem('users');
  const [usersList, setUsersList] = React.useState<string[]>(
    usersLocal ? JSON.parse(usersLocal) : []
  );

  return (
    <div className="h-screen gap-2 bg-[#fafafa] p-2 justify-center ">
      <SearchForm setUsersList={setUsersList} />
      <Cards usersList={usersList} />
    </div>
  );
};

export default App;
