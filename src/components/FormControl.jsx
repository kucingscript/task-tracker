import { Button, Center, Flex, Input, useToast } from "@chakra-ui/react";

const FormControl = (props) => {
  const { todos, setTodos, inputValue, setInputValue, getCurrentDate } = props;
  const toast = useToast();

  const handleAddTodoList = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "Task cannot be empty",
        description: "Please complete the task before submit",
        status: "error",
      });
      return;
    }

    const currentValue = {
      id: todos.length,
      title: inputValue,
      time: getCurrentDate(),
      isCompleted: false,
    };
    const newTodo = [...todos, currentValue];
    localStorage.setItem("todos", JSON.stringify(newTodo));

    setTodos(newTodo);
    setInputValue("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTodoList();
    }
  };

  return (
    <Center mb={5}>
      <Flex gap={2} width="80%">
        <Input
          type="text"
          placeholder="Add task here..."
          size="md"
          variant="filled"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button
          bg="orange.200"
          color="orange.500"
          size="md"
          _hover={{ color: "orange.600" }}
          onClick={handleAddTodoList}
        >
          Add Task
        </Button>
      </Flex>
    </Center>
  );
};

export default FormControl;
