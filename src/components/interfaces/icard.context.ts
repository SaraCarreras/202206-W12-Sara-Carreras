import { iPersonajesArr } from './personajes.arr';
//SI  TODO FUNCIONA DELETE THISs
export interface iCardContext {
  personajes: Array<iPersonajesArr>;

  toDie(id: number): void;
  toSpeack(id: number): void;
}
