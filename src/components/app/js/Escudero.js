import { Personaje } from './Personaje.js';

export class Escudero extends Personaje {
    emoji = '🛡';

    constructor(name, family, age, squireOf, submission) {
        const communicate = 'Soy un loser';
        super(name, family, age, communicate);
        this.squireOf = squireOf;
        this.submission = submission;
    }

    phrase() {
        return super.phrase(this.communicate);
    }

    specialSkills() {
        return `
        <ul class="list-unstyled">
            <li>Sirve a: ${this.squireOf}</li>
            <li>Grado de pelotismo: ${this.submission}</li>
        </ul>
    `;
    }
}
