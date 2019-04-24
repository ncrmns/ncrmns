'use strict';
import { Instrument } from './instrument';
export { StringedInstrument };

abstract class StringedInstrument extends Instrument {
  abstract numberOfStrings: number;
  sound():string {return this.sounds};
  play():void {
    // Electric Guitar, a 6-stringed instrument that goes Twang
    let out: any[] = [
      this.name,
      ', a ',
      this.numberOfStrings,
      '-stringed instrument that goes ',
      this.sound(),
    ]
    console.log(out.join(''));
  };
}