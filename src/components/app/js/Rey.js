import { Personaje } from './Personaje.js';
export class Rey extends Personaje {
    emoji = '👑';
    constructor(name, family, age, yearsOfReign) {
        const communicate = 'Vais a morir todos';
        super(name, family, age, communicate);
        this.yearsOfReign = yearsOfReign;
    }

    phrase() {
        super.phrase(this.communicate);
    }

    specialSkills() {
        return `
         <ul class="list-unstyled">                  
            <li>Años de reinado: ${this.yearsOfReign}</li>
         </ul>
        
        
        `;
    }
}
