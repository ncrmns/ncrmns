'use strict';
import { Aircraft } from './aircraft'
export { F35 }

class F35 extends Aircraft {
  constructor() {
    super('F35', 0, 50, true, 12);
  }
}