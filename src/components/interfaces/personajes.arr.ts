export interface iPersonajesArr {
  id: number;
  alive: boolean;
  imgName: string;
  nameAndFamily: string;
  typeOfCharacter: string;
  yearsOfReign?: number;
  age: number;
  emoji: string;
  phrase: string;
  weapon?: string;
  skill?: number;
  adviserOf?: string;
  squirerOf?: string;
  gradeOfSubmission?: number;
}

export type iPersonajesArrType = Array<iPersonajesArr>;
