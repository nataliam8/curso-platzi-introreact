import { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoSearch.css";

export const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Buscar"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
};
