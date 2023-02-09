import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@chakra-ui/react';
import { postTodo } from '../api/todo';
import '../style/TaskAdder.css';

export default function TaskAdder() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    mutate({ title: title, body: body });
  };

  return (
    <div className='add-menu'>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          minLength={5}
          required
          type='text'
        />
        <label>Description:</label>
        <input
          onChange={(event) => setBody(event.target.value)}
          value={body}
          type='text'
        /><Stack direction="row" justifyContent="flex-end" spacing={2}>
        <Button variant="contained"  type='submit' colorScheme='cyan' px='8'>
          Delete
        </Button>
        <Button id="todolist-deleteall-button" variant="contained" color="error" onClick={handleDelete}>
            DELETE ALL
        </Button>
    </Stack>
        
      </form>
    </div>
  )
}


