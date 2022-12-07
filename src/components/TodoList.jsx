/* import React from 'react';
import { VStack, StackDivider, HStack, Text, Spacer, IconButton, Badge } from '@chakra-ui/react';
import { FaTrash } from "react-icons/fa";

const TodoList = ({todos, deleteTodo}) => {
  if(!todos.length) {
    return(
      <Badge colorScheme='cyan' p='5' borderRadius='lg'>
        Agregue nuevas tareas a la lista de ToDo's
      </Badge>
    );
  }
  
  return (
    <VStack divider={<StackDivider />} borderWidth='2px' borderColor='gray.100' borderRadius='lg' padding='4' w='100%' maxW={{base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw'}} alignItems='stretch'>
      {todos.map(todo => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton icon={<FaTrash />} isRound='true' onClick={() => deleteTodo(todo.id)} />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList; */

import React from "react";
import '../style/TodoList.css'
import Task from "./Task";

function TodoList(){
	return(
		<div>
			<div className="todo-container">
				<div className="tasks">
					<Task/>
					<Task/>
					<Task/>
					<Task/>
				</div>
			</div>
		</div>
	)
}

export default TodoList
