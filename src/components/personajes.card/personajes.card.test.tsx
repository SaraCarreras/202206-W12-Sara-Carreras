import { render, screen } from '@testing-library/react';
import { PersonajesCard } from './personajes.card';
import { iPersonajesArr } from '../interfaces/personajes.arr';
import userEvent from '@testing-library/user-event';

describe('Given the component PersonajesCard', () => {
  describe('when the component is rendered', () => {
    test("should render a Personaje's card with this info", () => {
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

      render(
        <PersonajesCard
          card={PersonajesArr}
          toDie={() => {}}
          toSpeack={() => {}}
        ></PersonajesCard>
      );
      const elementArr = screen.getByText(/Edad: 16 años/i);
      expect(elementArr).toBeInTheDocument();
    });

    describe('when the button is clicked', () => {
      test('should kill a character', () => {
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
        const deleteMock = jest.fn();
        render(
          <PersonajesCard
            card={PersonajesArr}
            toDie={deleteMock}
            toSpeack={() => {}}
          ></PersonajesCard>
        );

        const deletebutton = screen.queryAllByTestId('button-delete');
        userEvent.click(deletebutton[0]);
        expect(deleteMock).toHaveBeenCalled();
      });
    });

    describe('when the comp is rendered', () => {
      test('should have the Test info as name', () => {
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
        const deleteMock = jest.fn();
        render(
          <PersonajesCard
            card={PersonajesArr}
            toDie={deleteMock}
            toSpeack={() => {}}
          ></PersonajesCard>
        );

        const elementArr = screen.getByText('Test');
        expect(elementArr).toBeInTheDocument();
      });
    });
  });
});
