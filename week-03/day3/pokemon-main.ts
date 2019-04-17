
import { Pokemon } from './pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?
for (let i=0; i<pokemonOfAsh.length; i++){
  if (pokemonOfAsh[i].isEffectiveAgainst(wildPokemon)){
    console.log(`I choose you, ${pokemonOfAsh[i].name}!`);
    break;
  }
}


function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Balbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}
