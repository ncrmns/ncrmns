'use strict';
import { StringedInstrument } from './stringedinstrument';

class ElectricGuitar extends StringedInstrument {
  name: string;
  numberOfStrings: number;
  sounds: string;

  constructor (strings: number = 6, sounds: string = 'Twang') {
    super()
      this.name = 'Electric Guitar';
      this.numberOfStrings = strings;
      this.sounds = sounds;
  }

}

class BassGuitar extends StringedInstrument {
  name: string;
  numberOfStrings: number;
  sounds: string;

  constructor (strings: number = 4, sounds: string = 'Duum-duum-duum') {
    super()
      this.name = 'Bass Guitar';
      this.numberOfStrings = strings;
      this.sounds = sounds;
  }

}

class Violin extends StringedInstrument {
  name: string;
  numberOfStrings: number;
  sounds: string;

  constructor (string: number = 4, sounds: string = 'Screech') {
    super()
      this.name = 'Violin';
      this.numberOfStrings = string;
      this.sounds = sounds;
  }

}



console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();