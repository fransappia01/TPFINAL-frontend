import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@chakra-ui/react';
import { deleteTodos } from '../api/todo';

export default function DeleteTodo() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteTodos,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      setDeleteData(data.message);
    },
  })

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='add-menu'>
      <form onSubmit={handleSubmit}>
        <Button type='submit' backgroundColor='red' px='8'>Delete All</Button>
      </form>
    </div>
  )
}


