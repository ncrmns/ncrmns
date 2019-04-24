'use strict';
export { Instrument }

abstract class Instrument {
  abstract name: string;
  abstract sounds: string;
  abstract play(): void;
}
