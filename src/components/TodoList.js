import React from 'react';
import { TodoListWrapper, TodoItem, TodoText, StyledButton } from '../styles';



const TodoList = ({ todos, onToggle, onDelete }) => (
  <TodoListWrapper>
    {todos.map(todo => (

    <TodoItem>
        <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
        <TodoText completed={todo.completed}>{todo.text}</TodoText>
        <StyledButton className={todo.completed ? 'green' : 'purple'} onClick={() => onDelete(todo.id)}>
            Delete
  </StyledButton>
</TodoItem>

    ))}
  </TodoListWrapper>
);

export default TodoList;
