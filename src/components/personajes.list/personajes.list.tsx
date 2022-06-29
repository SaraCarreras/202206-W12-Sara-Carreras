import { PersonajesCard } from '../personajes.card/personajes.card';

import { ArrayPersonajesContext } from '../../context/arr.context.provider';
import { useContext } from 'react';

export function PersonajesList() {
  const {
    personajes: characters,
    toDie,
    toSpeack,
  } = useContext(ArrayPersonajesContext);

  return (
    <ul className="characters-list row list-unstyled">
      {characters.map((card) => (
        <li className="character col" key={card.nameAndFamily}>
          <PersonajesCard
            card={card}
            toDie={() => toDie(card.id)}
            toSpeack={() => toSpeack(card.id)}
          />
        </li>
      ))}
    </ul>
  );
}
