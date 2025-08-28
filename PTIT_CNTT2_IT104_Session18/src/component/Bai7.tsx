import { useReducer, useEffect, useState } from 'react';

interface Todo {
  id: number;
  title: string;
}
type Action =
  | { type: 'ADD'; payload: string }
  | { type: 'REMOVE'; payload: number }
  | { type: 'SET'; payload: Todo[] };
function todoReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case 'ADD':
      const newTodo = { id: Date.now(), title: action.payload };
      const updatedTodos = [...state, newTodo];
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    case 'REMOVE':
      const filteredTodos = state.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(filteredTodos));
      return filteredTodos;
    case 'SET':
      return action.payload;
    default:
      return state;
  }
}
function Bai7() {
  const [state, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState('');
  useEffect(() => {
    const data = localStorage.getItem('todos');
    if (data) {
      dispatch({ type: 'SET', payload: JSON.parse(data) });
    }
  }, []);
  function handleAdd() {
    if (input.trim() !== '') {
      dispatch({ type: 'ADD', payload: input });
      setInput('');
    }
  }
  function handleRemove(id: number) {
    dispatch({ type: 'REMOVE', payload: id });
  }
  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <input
        placeholder="Nhập tên công việc"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      {state.map(todo => (
        <div
          key={todo.id}
        >
          <span>{todo.title}</span>
          <button
            onClick={() => handleRemove(todo.id)}
          >
            Xóa
          </button>
        </div>
      ))}
      <button
        onClick={handleAdd}
      >
        Thêm công việc
      </button>
    </div>
  );
}
export default Bai7;
