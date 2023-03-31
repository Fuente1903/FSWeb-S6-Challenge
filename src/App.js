import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Karakter from '../karakter';
import './App.css';


const AppWrapper = styled.div`
text-align: center;
  font-family: : Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Header = styled.h1`
color: #443e3e;
text-shadow: 1px 1px 5px #fff;
background-color: #333;
color: #fff;
text-align: center;
padding: 1rem;
`;

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
    })
    .catch(error => {
      console.log(error);
    });
  },[]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <AppWrapper>
      <Header>Karakterler</Header>
      {characters.map((character) => (
        <Karakter key={character.url} name={character.name} />
      ))}
    </AppWrapper>
  );
};

export default App;
