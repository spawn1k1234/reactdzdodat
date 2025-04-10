import styled from 'styled-components';

export const TodoListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;

export const Button = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  width: 30%;
  transition: all 0.3s ease;

  &:focus {
    border-color: #4CAF50;
    outline: none;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }

  &::placeholder {
    color: #888;
  }
`;

export const StyledButon = styled.button`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    border-color: #4CAF50;
    outline: none;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }

  &::placeholder {
    color: #888;
  }
`;
