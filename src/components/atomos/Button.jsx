import React from 'react';
import '../../index.css';

const Button = ({ onClick, children }) => (
    <button type="button" onClick={onClick}>
        {children}
    </button>
);

export default Button;