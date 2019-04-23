'use strict';
import { Aircraft } from './aircraft'
export { F16 }

class F16 extends Aircraft {
  constructor() {
    super('F16', 0, 30, false, 8);
  }
}