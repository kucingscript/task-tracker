import { useEffect, useState } from "react";
import { Button, Center, Flex, Tag, Text, VStack } from "@chakra-ui/react";

import { checkIsCompleted } from "../utils";
import TodoListTable from "./TodoListTable";

const TodoList = ({ todos }) => {
  const [toggleComplete, setToggleComplete] = useState(false);
  const [renderTodos, setRenderTodos] = useState([]);

  useEffect(() => {
    if (toggleComplete) {
      const completedTodos = todos.filter((todo) => todo.isCompleted);
      setRenderTodos(completedTodos);
    } else {
      setRenderTodos(todos);
    }
  }, [toggleComplete, todos]);

  return (
    <>
      <VStack spacing="3">
        {renderTodos.map((todo) => (
          <Flex
            bg={checkIsCompleted(todo.isCompleted, 200)}
            justifyContent="space-between"
            alignItems="center"
            w="97%"
            p="3"
            rounded="xl"
            key={`todo-${todo.id}`}
          >
            <TodoListTable todo={todo} checkIsCompleted={checkIsCompleted} />
          </Flex>
        ))}
      </VStack>

      {renderTodos.length === 0 && toggleComplete && (
        <Center>
          <Tag
            size="xl"
            variant="solid"
            colorScheme="orange"
            py="2"
            px="4"
            rounded="xl"
          >
            Nothing here
          </Tag>
        </Center>
      )}

      {todos.length !== 0 && (
        <Center mt="5">
          <Button
            size="xl"
            p="3"
            bg={checkIsCompleted(!toggleComplete, 200)}
            color={checkIsCompleted(!toggleComplete, 600)}
            cursor="pointer"
            _hover={{ color: `${checkIsCompleted(!toggleComplete, 700)}` }}
            _active={{}}
            onClick={() => setToggleComplete(!toggleComplete)}
          >
            {toggleComplete ? "See All" : "See Completed Todos"}
          </Button>
        </Center>
      )}
    </>
  );
};

export default TodoList;
