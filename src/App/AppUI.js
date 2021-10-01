import { useContext } from "react";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter";
import { TodoForm } from "../components/TodoForm";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";

export const AppUI = () => {
  const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal } =
    useContext(TodoContext);

  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {error && <p>Desespérate, hubo un error ...</p>}
        {loading && <p>Cargando ...</p>}
        {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
};
