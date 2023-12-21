'use client';
import React, { useState } from 'react';

async function createTodo() {
  const res = await fetch('http://localhost:4000/api/todos');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

function TodoForm() {
  const [todo, setTodo] = useState('');
  return (
    <div>
      <form>
        <input
          type="text"
          name={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>
    </div>
  );
}

export default TodoForm;
