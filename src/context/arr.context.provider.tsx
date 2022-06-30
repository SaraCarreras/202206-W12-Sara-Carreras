import { useState, createContext } from 'react';
import { PersonajesArr } from '../components/each.personaje/personajesArr';
import { iCardContext } from '../components/interfaces/icard.context';
import { iPersonajesArr } from '../components/interfaces/personajes.arr';

export const initialContext: {
  personajes: Array<iPersonajesArr>;

  toDie(id: number): void;
  toSpeack(id: number): void;
} = { personajes: [], toDie: (id) => {}, toSpeack: (id) => {} };

export const ArrayPersonajesContext =
  createContext<iCardContext>(initialContext);

export function ArrayPersonajesProvider({
  children,
}: {
  children: Array<JSX.Element>;
}) {
  const [personajes, setPersonajes] =
    useState<Array<iPersonajesArr>>(PersonajesArr);

  const toDie = (id: number) => {
    setPersonajes(
      personajes.map((character) =>
        character.id !== id ? { ...character } : { ...character, alive: false }
      )
    );
  };
  const toSpeack = (id: number) => {};

  const context = {
    personajes,
    toDie,
    toSpeack,
  };

  return (
    <ArrayPersonajesContext.Provider value={context}>
      {children}
    </ArrayPersonajesContext.Provider>
  );
}
