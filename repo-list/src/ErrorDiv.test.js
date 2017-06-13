import React from 'react';
import ReactDOM from 'react-dom';

import ErrorDiv from './ErrorDiv';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorDiv />, div);
});


