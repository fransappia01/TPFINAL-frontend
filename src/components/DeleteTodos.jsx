import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@chakra-ui/react';
import { deleteTodos } from '../api/todo';
import { Alert } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

export default function DeleteTodo() {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteTodos,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  })

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  function handleDelete() {
    deleteMutation.mutate();
    const toast = useToast()
    toast({
      position: 'bottom-left',
      render: () => (
        <Box color='white' p={3} bg='blue.500'>
          Hello World
        </Box>
      ),
    })
  }


  return (
    <div className='add-menu'>
      <form onSubmit={handleSubmit}>
        <Button type='submit' backgroundColor='red' px='8' onClick={handleDelete}>Delete All</Button>
      </form>
    </div>
  )
}


