// Array de personajes
import { Personaje } from './Personaje.js';
import { Rey } from './Rey.js';
import { Luchador } from './Luchador.js';
import { Asesor } from './Asesor.js';
import { Escudero } from './Escudero.js';

export const kingChar = new Rey('Joffrey', 'Baratheon', 15, 0.5);
const knightCharJaime = new Luchador('Jaime', 'Lannister', 35, 'Espada', 7);
const knightCharDae = new Luchador('Daenerys', 'Targaryen', 20, 'Dragones', 9);

const adviserChar = new Asesor('Tyrion', 'Lannister', 26, 'Daenerys');

const squireChar = new Escudero(
    'Bronn',
    'Stokeworth',
    41,
    'Jaime Lannister',
    9
);

export const personajesArr = [
    kingChar,
    knightCharJaime,
    knightCharDae,
    adviserChar,
    squireChar,
];
