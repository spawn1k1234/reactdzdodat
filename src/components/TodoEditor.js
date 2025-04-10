import React, { Component } from 'react';
import { StyledInput, StyledButon } from '../styles';

class TodoEditor extends Component {
  state = {
    textValue: '',
  };

  handleInputChange = (e) => {
    this.setState({ textValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.textValue.trim()) {
      this.props.onAdd(this.state.textValue);
      this.setState({ textValue: '' });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <StyledInput
          type="text"
          value={this.state.textValue}
          onChange={this.handleInputChange}
          placeholder="новая задания"
        />
        <StyledButon type="submit">добавить</StyledButon>
      </form>
    );
  }
}

export default TodoEditor;
