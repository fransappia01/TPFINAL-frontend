import React from 'react';
import '../style/Task.css';

export default function Task({ title, body }) {
  return (
    <div className='task'>
      <div className='task-container'>
        <p>Title: {title}</p>
        <p>Description: {body}</p>
      </div>
    </div>
  )
}
