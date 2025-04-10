import React, { Component } from 'react';
import { FormWrapper, StyledInput, StyledButton } from '../styles';


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
        <FormWrapper onSubmit={this.handleSubmit}>
        <StyledInput
            type="text"
            value={this.state.textValue}
            onChange={this.handleInputChange}
            placeholder="Нова задача"
        />
  <StyledButton className="green" type="submit">Create</StyledButton>
</FormWrapper>


    );
  }
}

export default TodoEditor;
