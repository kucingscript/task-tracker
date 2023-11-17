import { createContext, useContext } from "react";

export const TodosContext = createContext(undefined);

export const useMutationTodo = () => {
  const [checkedTodo, deleteTodo, updateTodo] = useContext(TodosContext);
  if (
    checkedTodo === undefined ||
    deleteTodo === undefined ||
    updateTodo === undefined
  ) {
    throw new Error("useMutationTodo must be used with a TodosContext");
  }

  return [checkedTodo, deleteTodo, updateTodo];
};
