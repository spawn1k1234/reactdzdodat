import React from 'react';

const Info = ({ total, completed }) => (
  <div>
    <p>Общее количество задач: {total}</p>
    <p>Количество выполненных задач: {completed}</p>
  </div>
);

export default Info;
