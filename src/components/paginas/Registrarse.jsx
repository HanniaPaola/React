import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainTemplate from '../plantillas/Main';
import Form from '../moleculas/Form';
import '../../index.css';

const Registrarse = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordc, setPasswordc] = useState('');

    // Usuario predeterminado
    const users = [
        { usuario: 'Hannia', pass: '123' }
    ];

    const handleRegister = (event) => {
        event.preventDefault();

        console.log('Form submitted');
        console.log(`Username: ${username}, Password: ${password}, Confirm Password: ${passwordc}`);

        if (password !== passwordc) {
            alert('ERROR: Las contraseñas no coinciden');
            return;
        }

        const userExists = users.some(u => u.usuario === username);

        if (userExists) {
            alert('El usuario ya existe');
        } else {
            alert('Éxito al guardar');
            navigate('/');
        }
    };

    return (
        <MainTemplate showHeader={false}>
            <main className="form-container">
                <h2>Registro</h2>
                <Form
                    onSubmit={handleRegister}
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    passwordc={passwordc}
                    setPasswordc={setPasswordc}
                />
            </main>
        </MainTemplate>
    );
};

export default Registrarse;