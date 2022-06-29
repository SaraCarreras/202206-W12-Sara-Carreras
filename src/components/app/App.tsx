import React from 'react';

import './App.css';

import { CardsContextProvider } from '../../context/arr.context';
import { PersonajesList } from '../personajes.list/personajes.list';

function App() {
  return (
    <CardsContextProvider>
      <div className="app container">
        <PersonajesList></PersonajesList>
      </div>
      <div className="comunications">
        <p className="comunications__text display-1">
          Una frase que dice alguien
        </p>
        <img
          className="comunications__picture"
          src="img/no-one.jpg"
          alt="Nombre y familia del que habla"
        />
      </div>
    </CardsContextProvider>
  );
}

export default App;
