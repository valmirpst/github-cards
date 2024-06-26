import React from 'react';

interface Props {
  usersList?: string[];
  setUsersList: React.Dispatch<React.SetStateAction<string[]>>;
}

const SearchForm = ({ setUsersList }: Props) => {
  const [searchInput, setSearchInput] = React.useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setUsersList(prev => {
      const newUsersList = [...prev, searchInput];
      window.localStorage.setItem('users', JSON.stringify(newUsersList));

      return newUsersList;
    });

    setSearchInput('');
  }

  return (
    <form
      className="w-full text-sm flex items-center gap-2 text-[#333] bg-[#fff] px-1 py-1 pl-2 rounded-[4px] shadow-[0_0_4px_#00000040]"
      action=""
      onSubmit={handleSubmit}
    >
      <label className="" htmlFor="username">
        Usuario Github
      </label>
      <input
        className="outline outline-1 outline-[#00000020] px-2 py-1 bg-[#e6e6e650] rounded-[4px]"
        type="text"
        id="username"
        name="username"
        onChange={({ target }) => {
          setSearchInput(target.value);
        }}
        value={searchInput}
      />
      <button className=" bg-[#1b8a56] text-[#fff] px-4 py-1 rounded-[4px]">Adicionar</button>
    </form>
  );
};

export default SearchForm;
