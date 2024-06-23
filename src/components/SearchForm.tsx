import React from 'react';

interface Props {
  usersList?: string[];
  setUsersList: React.Dispatch<React.SetStateAction<string[]>>;
}

const SearchForm = ({ setUsersList }: Props) => {
  const [searchInput, setSearchInput] = React.useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setUsersList(prev => {
      return [...prev, searchInput];
    });

    setSearchInput('');
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="username">Usuario Github</label>
      <input
        type="text"
        id="username"
        name="username"
        onChange={({ target }) => {
          setSearchInput(target.value);
        }}
        value={searchInput}
      />
      <button>Adicionar</button>
    </form>
  );
};

export default SearchForm;
