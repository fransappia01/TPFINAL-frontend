import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@chakra-ui/react';
import { deleteTodos } from '../api/todo';
import {Swal} from 'sweetalert2'

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
    Swal.fire({
      position: 'top-end',
      icon:'success',
      title:'Task added to the list',
      showConfirmButton: false,
      timer: 1500
    })
  
  };

  function handleDelete() {
    deleteMutation.mutate();
  }


  return (
    <div className='add-menu'>
      <form onSubmit={handleSubmit}>
        <Button type='submit' backgroundColor='red' px='8' onClick={handleDelete}>Delete All</Button>
      </form>
    </div>
  )
}


