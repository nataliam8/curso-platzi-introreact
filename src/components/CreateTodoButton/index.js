import { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import "./CreateTodoButton.css";

export const CreateTodoButton = () => {
  const { setOpenModal } = useContext(TodoContext);
  const onClickButton = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
};
