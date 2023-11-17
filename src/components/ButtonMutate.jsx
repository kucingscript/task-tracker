import { CheckIcon, CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useMutationTodo } from "../context";

const ButtonMutate = ({ checkIsCompleted, todo }) => {
  const [checkedTodo, deleteTodo, updateTodo] = useMutationTodo();

  return (
    <>
      <IconButton
        variant="outline"
        icon={todo.isCompleted ? <CloseIcon /> : <CheckIcon />}
        bg="white"
        color={checkIsCompleted(todo.isCompleted, 600)}
        onClick={() => checkedTodo(todo.id)}
      />
      <IconButton
        variant="outline"
        icon={<EditIcon />}
        bg="white"
        color={checkIsCompleted(todo.isCompleted, 600)}
        onClick={() => updateTodo(todo.id, todo.title)}
      />
      <IconButton
        variant="outline"
        icon={<DeleteIcon />}
        bg="white"
        color={checkIsCompleted(todo.isCompleted, 600)}
        onClick={() => deleteTodo(todo.id, todo.title)}
      />
    </>
  );
};

export default ButtonMutate;
