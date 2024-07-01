import React from 'react';
import Heading from '../atomos/Heading';
import Navigation from '../moleculas/Paneles';
import '../../index.css';

const Header = () => (
    <header>
        <Heading level={1}>Películas más conocidas de Tim Burton</Heading>
        <Navigation />
    </header>
);

export default Header;