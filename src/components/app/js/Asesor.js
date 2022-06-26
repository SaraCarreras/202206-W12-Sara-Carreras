import { Personaje } from './Personaje.js';

export class Asesor extends Personaje {
    emoji = '🎓';

    constructor(name, family, age, adviserOf) {
        const communicate = 'No sé por qué, pero creo que voy a morir pronto';
        super(name, family, age, communicate);
        this.adviserOf = adviserOf;
    }

    phrase() {
        super.phrase(this.communicate);
    }

    specialSkills() {
        return `
         <ul class="list-unstyled">                  
            <li>Asesora a: ${this.adviserOf}</li>
         </ul>
        
        
        `;
    }
}
