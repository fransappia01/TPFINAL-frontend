import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@chakra-ui/react';
import { postTodo } from '../api/todo';
import '../style/TaskAdder.css';

export default function DeleteTodos() {
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
        <Button type='submit' colorScheme='red' px='8'>Delete All</Button>
      </form>
    </div>
  )
}


