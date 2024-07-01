import React from 'react';
import Header from '../Organismos/Header';
import '../../index.css';

const Main = ({ children, showHeader = true }) => (
    <div>
        {showHeader && <Header />}
        <main>
            {children}
        </main>
    </div>
);

export default Main;