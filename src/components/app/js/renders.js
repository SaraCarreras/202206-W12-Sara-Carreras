import { personajesArr } from './personajes.js';

export function createCards() {
    const charactersList = document.querySelector('ul.characters-list');
    document.querySelector('.col').remove();

    personajesArr.forEach((character) => {
        const card = document.createElement('li');
        card.classList.add('character', 'col');

        card.innerHTML = `
                    <div class="card character__card">
                        <img
                            src="../img/${character.name}.jpg"
                            alt="Nombre y familia del personaje"
                            class="character__picture card-img-top img-${
                                character.name
                            }"
                        />
                        <div class="card-body">
                            <h2 class="character__name card-title h4">
                                ${character.name} ${character.family}
                            </h2>
                            <div class="character__info thumbs-${
                                character.name
                            }">
                                <ul class="list-unstyled">
                                    <li>Edad: ${character.age} años</li>
                                    <li>
                                        Estado:
                                        ${character.thumbs()}
                                    </li>
                                </ul>
                            </div>
                            <div class="character__overlay">
                                ${character.specialSkills()}
                            <div class="character__actions">
                                ${character.characterButtons()}        
                            </div>
                        </div>
                    </div>
                    <i class= "emoji">${character.emoji}</i>
                </div>
                                </li>
            </ul>
        </div>
        <div class="comunications">
            <p class="comunications__text display-1">
                Una frase que dice alguien
            </p>
            <img
                class="comunications__picture"
                src="img/no-one.jpg"
                alt="Nombre y familia del que habla"
            />
        </div>
    `;
        charactersList.appendChild(card);
    });
}

export function buttonListener() {
    personajesArr.forEach((character) => {
        const speakButton = document.querySelector(
            `.btn-talk-${character.name}`
        );
        const dieButton = document.querySelector(`.btn-die-${character.name}`);

        speakButton.addEventListener('click', () => {
            character.phrase();
        });
        dieButton.addEventListener('click', () => {
            character.death();
        });
    });
}
