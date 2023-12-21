import React, { useState } from 'react';

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
