import { render, screen } from '@testing-library/react';

import { iPersonajesArr } from '../interfaces/personajes.arr';

import { RolePersonaje } from './role.personaje';

describe('Given the component RolePersonaje', () => {
  describe('when the component is rendered', () => {
    test("should render yearsOfReing's info, according to its King's role", () => {
      const PersonajesArr: iPersonajesArr = {
        id: 1,
        alive: true,
        imgName: 'Joffrey',
        nameAndFamily: 'Test',
        typeOfCharacter: 'king',
        yearsOfReign: 1.5,
        age: 16,
        emoji: '👑',
        phrase: 'Vais a morir todos',
      };

      render(<RolePersonaje personaje={PersonajesArr}></RolePersonaje>);
      const infoElement = screen.getByText(/Años de reinado: 1.5/i);
      expect(infoElement).toBeInTheDocument();
    });
  });
});
