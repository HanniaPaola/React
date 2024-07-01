import React from 'react';
import Button from '../atomos/Button';
import Input from '../atomos/Input';
import '../../index.css';

const Form = ({ onSubmit, username, setUsername, password, setPassword, passwordc, setPasswordc }) => (
    <form onSubmit={onSubmit}>
        <label htmlFor="RUser">Usuario:</label>
        <Input
            id="RUser"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="RPass">Contraseña:</label>
        <Input
            id="RPass"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="RPassc">Confirmar Contraseña:</label>
        <Input
            id="RPassc"
            type="password"
            value={passwordc}
            onChange={(e) => setPasswordc(e.target.value)}
        />
        <Button type="submit">
            Guardar
        </Button>
    </form>
);

export default Form;