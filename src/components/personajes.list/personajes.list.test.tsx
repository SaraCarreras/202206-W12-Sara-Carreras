import { render, screen } from '@testing-library/react';
import { PersonajesList } from './personajes.list';
import { ArrayPersonajesContext } from '../../context/arr.context.provider';

describe('Given the component PersonajesList', () => {
  describe('when the component is rendered', () => {
    test("should render a Personaje's card", () => {
      const mockContext = {
        personajes: [
          {
            id: 1,
            alive: true,
            imgName: 'no-one',
            nameAndFamily: 'Test',
            typeOfCharacter: 'king',
            yearsOfReign: 1.5,
            age: 16,
            emoji: '👑',
            phrase: 'Vais a morir todos',
          },
        ],
        toDie: (id: number) => {},
        toSpeack: (id: number) => {},
      };
      render(
        <ArrayPersonajesContext.Provider value={mockContext}>
          <PersonajesList></PersonajesList>
        </ArrayPersonajesContext.Provider>
      );
    });

    const elementArr = screen.queryByTestId('listID');
    expect(elementArr).toBeDefined();
  });
});
