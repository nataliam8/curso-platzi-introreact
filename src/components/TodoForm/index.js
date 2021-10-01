import { useContext, useState } from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoForm.css";

export const TodoForm = () => {
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Hacer la comida para mi hijo"
        value={newTodoValue}
        onChange={onChange}
      />

      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          type="button"
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
};
