import { useEffect, useState } from "react";
import { Box, Center, Container, Heading, useToast } from "@chakra-ui/react";

import FormControl from "./components/FormControl";
import TodoList from "./components/TodoList";

import { TodosContext } from "./context";
import { getCurrentDate } from "./utils";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const toast = useToast();

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const hanldeCheckTodoById = (todoId) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    localStorage.setItem("todos", JSON.stringify(newTodo));
    setTodos(newTodo);
  };

  const handleDeleteTodoById = (todoId, todoTitle) => {
    const shouldDelete = window.confirm(
      `Are you sure want to delete ${todoTitle}?`
    );

    if (shouldDelete) {
      const filteredTodos = todos.filter((todo) => todo.id !== todoId);
      localStorage.setItem("todos", JSON.stringify(filteredTodos));
      setTodos(filteredTodos);
      toast({
        title: "Success",
        description: `${todoTitle} deleted successfully`,
        status: "success",
      });
    }
  };

  const handleUpdateTodoById = (todoId, todoTitle) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === todoId) {
        const newTodoValue = prompt(`Update ${todo.title} to?`);

        try {
          if (newTodoValue.trim() === "") {
            toast({
              title: "Task cannot be empty",
              description: "Please complete the task before proceeding",
              status: "error",
            });
          } else {
            todo.id = todoId;
            todo.title = newTodoValue;
            todo.time = getCurrentDate();
            todo.isCompleted;
            toast({
              title: "Success",
              description: `${todoTitle} successfully updated to ${todo.title}`,
              status: "success",
            });
          }
        } catch (error) {}
      }
      return todo;
    });
    localStorage.setItem("todos", JSON.stringify(newTodo));
    setTodos(newTodo);
  };

  return (
    <TodosContext.Provider
      value={[hanldeCheckTodoById, handleDeleteTodoById, handleUpdateTodoById]}
    >
      <Container
        maxW="3xl"
        bg="white"
        rounded="lg"
        w="100vw"
        py="5"
        px="6"
        shadow="xl"
      >
        <Heading textAlign="center" color="orange.500">
          Task Tracker
        </Heading>

        <Center my={3}>
          <Box w="50%" bg="orange.500" p="1" rounded="md"></Box>
        </Center>

        <FormControl
          todos={todos}
          setTodos={setTodos}
          inputValue={inputValue}
          setInputValue={setInputValue}
          getCurrentDate={getCurrentDate}
        />
        <TodoList todos={todos} />
      </Container>
    </TodosContext.Provider>
  );
};

export default App;
