
import styled from 'styled-components';


export const FormWrapper = styled.form`
  border: 1px solid black;
  padding: 20px;
  margin: 20px 0;
`;


export const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid black;
  border-radius: 4px;
  margin: 10px 0;
  width: 300px;

  &::placeholder {
    color: #888;
  }
`;


export const StyledButton = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;

  &.green {
    background-color: #4caf50;

    &:hover {
      background-color: #388e3c;
    }
  }

  &.purple {
    background-color: #8000ff;

    &:hover {
      background-color: #5e00c7;
    }
  }
`;

export const TodoListWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
`;


export const TodoText = styled.span`
  flex: 1;
  margin: 0 10px;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
`;

export const InfoBlock = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
`;
