import React from 'react';
import { TodoListWrapper, TodoItem, Button } from '../styles';

const TodoList = ({ todos, onToggle, onDelete }) => (
  <TodoListWrapper>
    {todos.map(todo => (
      <TodoItem key={todo.id}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
        <Button onClick={() => onDelete(todo.id)}>удалить</Button>
      </TodoItem>
    ))}
  </TodoListWrapper>
);

export default TodoList;
