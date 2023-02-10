import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@chakra-ui/react';
import { deleteTodos } from '../api/todo';
import { Alert } from '@chakra-ui/react';

export default function DeleteTodo() {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteTodos,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      setDeleteData(data.message);
    },
  })

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  function handleDelete() {
    deleteMutation.mutate();
}

  return (
    <div className='add-menu'>
      <form onSubmit={handleSubmit}>
        <Button type='submit' backgroundColor='red' px='8' onClick={handleDelete}>Delete All
                        <Alert status='error'>
                         <AlertIcon />
                            Your ToDo's has been deleted
                        </Alert>
        </Button>
      </form>
    </div>
  )
}


