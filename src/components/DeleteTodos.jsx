import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Toast } from '@chakra-ui/react';
import { deleteTodos } from '../api/todo';
import Swal from 'sweetalert2'

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
                                //hacer que la alerta aparezca luego de 2 segundos
  setTimeout(()=>{
    Swal.fire({
      position: 'bottom-left',
      icon:'success',
      title:'All your tasks have been successfully deleted',
      showConfirmButton: false,
      timer: 1500,
      width: 300,
      height: 100,
      toast: true
    })
  },1000)                                
  
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


