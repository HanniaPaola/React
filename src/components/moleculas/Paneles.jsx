import React from 'react';
import '../../index.css';

const Paneles = () => (
    <nav>
        <a href="#" onClick={() => window.location.href = "/Iniciar Sesion"}>Iniciar Sesión</a>

        <a href="#" onClick={() => window.location.href = "/Registrarse"}>Registro</a>
    </nav>
);

export default Paneles;