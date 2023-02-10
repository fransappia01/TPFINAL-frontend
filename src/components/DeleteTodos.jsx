import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@chakra-ui/react';
import { deleteTodos } from '../api/todo';

export default function DeleteTodo() {
  const queryClient = useQueryClient();

  const [open, setOpen] = React.useState(false);
    const [deleteData, setDeleteData] = React.useState("");

  const deleteMutation = useMutation({
    mutationFn: deleteTodos,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
      setOpen(true);
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
        <Button type='submit' backgroundColor='red' px='8' onClick={handleDelete}>Delete All</Button>
        {deleteMutation.isSuccess &&
                    <Snackbar id="todolist-delete-snackbar" open={open} autoHideDuration={5000} onClose={handleClose} sx={{ width: '100%' }}>
                        <Alert status='error'>
                         <AlertIcon />
                            Your ToDo's has been deleted
                        </Alert>
                    </Snackbar>}
      </form>
    </div>
  )
}


