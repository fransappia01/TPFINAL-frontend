import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Task from './Task';
import { deleteTodos } from '../api/todo';
import '../style/TodoList.css';

export default function deleteTodos() {
 
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  })

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='add-menu'>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <Button type='submit' colorScheme='red' px='8'>Add task</Button>
      </form>
    </div>
  )
}