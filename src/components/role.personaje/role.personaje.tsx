import { iPersonajesArr } from '../interfaces/personajes.arr';

export function RolePersonaje({ personaje }: { personaje: iPersonajesArr }) {
  const additionalInfoByRole = (
    personaje: iPersonajesArr
  ): JSX.Element | undefined => {
    switch (personaje.typeOfCharacter) {
      case 'king':
        return <li>Años de reinado: {personaje.yearsOfReign}</li>;

      case 'fighter':
        return (
          <>
            <li>Arma: {personaje.weapon}</li>
            <li>Destreza: {personaje.skill}</li>
          </>
        );

      case 'adviser':
        return <li>Asesora a: {personaje.adviserOf}</li>;
      case 'squire':
        return (
          <>
            <li>Peloteo: {personaje.gradeOfSubmission}</li>
            <li>Sirve a: {personaje.squirerOf}</li>
          </>
        );
      default:
        return undefined;
    }
  };
  return <ul className="list-unstyled">{additionalInfoByRole(personaje)}</ul>;
}
