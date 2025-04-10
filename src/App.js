import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import Filter from './components/Filter';
import Info from './components/Info';

class App extends Component {
  state = {
    todos: [],
    filter: '',
  };

  componentDidMount() {
    fetch('/todos.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ todos: data });
      })
      .catch(error => console.error('Ошибка даных', error));
  }

  handleAddTodo = (text) => {
    const newTodo = {
      id: `id-${Date.now()}`,
      text,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  handleToggleCompleted = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  handleDeleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { todos, filter } = this.state;


    const filteredTodos = todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );


    const completedTodos = todos.filter(todo => todo.completed).length;

    return (
      <div>
        <h1>Список Заданий</h1>
        <Info total={todos.length} completed={completedTodos} />
        <Filter value={filter} onChange={this.handleFilterChange} />
        <TodoEditor onAdd={this.handleAddTodo} />
        <TodoList
          todos={filteredTodos}
          onToggle={this.handleToggleCompleted}
          onDelete={this.handleDeleteTodo}
        />
      </div>
    );
  }
}

export default App;
