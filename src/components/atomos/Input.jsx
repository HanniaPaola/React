import React from 'react';
import '../../index.css';

const Input = ({ id, type, value, onChange }) => (
    <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
    />
);

export default Input;