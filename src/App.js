import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemonCharacters, setPokemonCharacters] = useState([])

useEffect (() => {
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then((response) => {
      setPokemonCharacters(response.data.results)
    })
    .catch((err) => {
      console.log(err);
    })
}, [])

  return (
    <div className="App">
      <h1> Pokemon Characters </h1>
    {pokemonCharacters.map((character, index) => ((
      (<li key={index}>{character.name}</li>))
    ))}
    </div>
  );
}

export default App;
