import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@chakra-ui/react';
import { deleteTodos } from '../api/todo';
import '../style/TaskAdder.css';

export default function DeleteTodo() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: DeleteTodo,
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
        <Button type='submit' colorScheme='red' px='8'>Delete All</Button>
      </form>
    </div>
  )
}


