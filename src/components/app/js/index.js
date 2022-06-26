import { createCards } from './renders.js';
import { buttonListener } from './renders.js';
document.addEventListener('DOMContentLoaded', () => {
    createCards();
    buttonListener();
});
