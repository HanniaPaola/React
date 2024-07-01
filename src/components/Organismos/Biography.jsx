import React from 'react';
import Heading from '../atomos/Heading';
import '../../index.css';

const Biography = () => (
    <section className="biografia">
        <Heading level={2}>Biografía de Tim Burton</Heading>
        <img src="https://media.revistavanityfair.es/photos/6400ab7f6073606fe2bfd57d/16:9/w_1920,c_limit/Tim%20Burton%201.jpeg" alt="Tim Burton" />
        <p>
            Tim Burton es un director, productor, escritor y diseñador 
            estadounidense conocido por su estilo visual oscuro y 
            gótico, y sus películas excéntricas. Entre sus obras 
            más reconocidas se encuentran "El joven manos de tijera",
            "El extraño mundo de Jack", y "Batman".
        </p>
        <p>Para conocer más, regístrese e inicie sesión.</p>
    </section>
);

export default Biography;