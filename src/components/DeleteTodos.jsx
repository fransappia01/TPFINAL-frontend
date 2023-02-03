import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Task from './Task';
import { deleteTodos } from '../api/todo';
import '../style/TodoList.css';

export default function TodoList() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: deleteTodos,
  });

  if (isLoading) {
    return (
      <h1>Cargando</h1>
    );
  }

  if (isError) {
    return (
      <h1>Hubo un error: {JSON.stringify(error)}</h1>
    );
  }

  return (
    <div>
      <div className='todo-container'>
        <div className='tasks'>
          {data.map(({ title, body }, index) => (
            <Task key={index} title={title} body={body} />
          ))}
        </div>
      </div>
    </div>
  );
}