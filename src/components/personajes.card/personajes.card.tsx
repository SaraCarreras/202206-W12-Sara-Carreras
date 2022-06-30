import { RolePersonaje } from '../role.personaje/role.personaje';
import { iPersonajesArr } from '../interfaces/personajes.arr';

export function PersonajesCard({
  card,
  toDie,
  toSpeack,
}: {
  card: iPersonajesArr;
  toDie: () => void;
  toSpeack: () => void;
}) {
  return (
    <div className="card character__card">
      <img
        src={require('../../img/' + card.imgName + '.jpg')}
        alt={card.nameAndFamily}
        className={
          'character__picture card-img-top' +
          (card.alive ? '' : ' character__picture--rotated')
        }
      />
      <div className="card-body">
        <h2 className="character__name card-title h4">{card.nameAndFamily}</h2>
        <div className="character__info">
          <ul className="list-unstyled">
            <li>Edad: {card.age} años</li>
            <li>
              Estado:
              <i
                className={
                  'fas ' + (card.alive ? 'fa-thumbs-up' : 'fa-thumbs-down')
                }
              ></i>
            </li>
          </ul>
        </div>
        <div className="character__overlay">
          <RolePersonaje personaje={card}></RolePersonaje>
          <div className="character__actions">
            <button className="character__action btn-speak" onClick={toSpeack}>
              habla
            </button>
            <button
              className="character__action btn-die"
              onClick={toDie}
              data-testid="button-delete"
            >
              muere
            </button>
          </div>
        </div>
      </div>
      <i className="emoji">{card.emoji}</i>
    </div>
  );
}
