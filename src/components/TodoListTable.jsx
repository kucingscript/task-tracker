import { Flex, Tag, TagLabel, TagLeftIcon, Text } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";

import ButtonMutate from "./ButtonMutate";

const TodoListTable = ({ todo, checkIsCompleted }) => {
  return (
    <>
      <Flex gap={2}>
        <Text color={checkIsCompleted(todo.isCompleted, 600)} fontWeight="600">
          {todo.id + 1}.
        </Text>
        <Text color={checkIsCompleted(todo.isCompleted, 600)} fontWeight="600">
          {todo.title}
        </Text>
        <Tag
          size="md"
          variant="solid"
          colorScheme={todo.isCompleted ? "green" : "orange"}
        >
          <TagLeftIcon boxSize="12px" as={TimeIcon} />
          <TagLabel>{todo.time}</TagLabel>
        </Tag>
      </Flex>

      <Flex gap="2">
        <ButtonMutate checkIsCompleted={checkIsCompleted} todo={todo} />
      </Flex>
    </>
  );
};

export default TodoListTable;
