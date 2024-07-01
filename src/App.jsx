import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/paginas/Home';
import './index.css';
import Registrarse from './components/paginas/Registrarse';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Registrarse" element={<Registrarse />} />
            </Routes>
        </Router>
    );
};

export default App;
