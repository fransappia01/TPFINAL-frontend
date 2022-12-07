import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import '../style/TaskAdder.css';

export default function TaskAdder() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const todo = {
      'title': title,
      'body': body,
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json')
    fetch('http://localhost:3000/api/todo', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(todo),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
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
        />
        <Button type='submit' colorScheme='cyan' px='8'>Add task</Button>
      </form>
    </div>
  )
}
