import React from 'react';
import '../../index.css';

const Heading = ({ level, children }) => {
    const Tag = `h${level}`;
    return <Tag>{children}</Tag>;
};

export default Heading;