export class Personaje {
    serie = 'Game of Thrones';
    alive = true;
    name;
    constructor(name, family, age, communicate = '') {
        this.name = name;
        this.family = family;
        this.age = age;
        this.communicate = communicate;
    }

    characterButtons() {
        return `
            <button class="character__action btn btn-talk-${this.name}">
                habla
            </button>
            <button class="character__action btn btn-die-${this.name}">
                muere
            </button>
        `;
    }

    thumbs() {
        if (this.alive === true) {
            return '<i class="fas fa-thumbs-up"></i>';
        } else {
            return '<i class="fas fa-thumbs-down"></i>';
        }
    }

    death() {
        this.alive = false;
        const die = document.querySelector(`.thumbs-${this.name}`);
        die.innerHTML = `<ul class="list-unstyled">
                    <li>Edad: ${this.age} años</li>
                    <li>
                        Estado:
                        ${this.thumbs()}
                    </li>
                </ul>`;

        document.querySelector(`.img-${this.name}`).style.transform =
            'rotate(180deg)';
    }

    phrase() {
        if (this.alive === true) {
            document.querySelector('.comunications').remove();
            const selectorBody = document.querySelector('body');
            const phraseWindow = document.createElement('div');
            phraseWindow.classList.add('comunications');
            phraseWindow.innerHTML = `  <p class="comunications__text display-1">
                 ${this.communicate}
            </p>
            <img
                class="comunications__picture"
                src="../img/${this.name}.jpg"     
                alt="Nombre y familia del que habla"
            />`;

            selectorBody.appendChild(phraseWindow);
            phraseWindow.classList.toggle('on');
            setTimeout(() => {
                phraseWindow.classList.toggle('on');
            }, 2000);
        }
    }

    specialSkills() {
        return this;
    }
}
