import React from 'react';
import ReactDOM from 'react-dom';
import UserName from './UserName';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserName />, div);
});

