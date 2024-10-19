import React, { useState } from 'react';
import './App.css';
import { text } from 'stream/consumers';
import { Todo } from './types';
import TodoLists from './TodoLists'

function App() {
  const [todos, setTodos] = useState<Todo[]>([
		{
			id: 1,
			text: "Buy Milk 🥛",
			completed: false,
},
{
  id: 2,
  text: "Buy Water🥛",
  completed: true,
}
]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ยากจัง</h1>
        <TodoLists todos={todos} />
      </header>
    </div>
  );
}

export default App;
