import React from 'react';
import { StyledInput } from '../styles';

const Filter = ({ value, onChange }) => (
  <StyledInput
    type="text"
    value={value}
    onChange={onChange}
    placeholder="фильтр"
  />
);

export default Filter;
