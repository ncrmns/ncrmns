'use strict';
import { F16 } from './f16'
import { F35 } from './f35'
import { Carrier } from './carrier'


let carrier1: Carrier = new Carrier(500, 5000);
let carrier2: Carrier = new Carrier(500, 5000);

for (let i = 0; i < 5; i++) {
  let airplaine: F16 = new F16();
  let random = Math.floor(Math.random() * 2);
  if (random == 1) {
    carrier1.add(airplaine);
  } else {
    carrier2.add(airplaine);
  }
}

for (let i = 0; i < 5; i++) {
  let airplaine: F35 = new F35();
  let random = Math.floor(Math.random() * 2);
  if (random == 1) {
    carrier1.add(airplaine);
  } else {
    carrier2.add(airplaine);
  }
}
console.log('==============================================================================');
console.error('  Aircrafts randomly added');
console.log('==============================================================================');
carrier1.getStatus();
console.log('          --------------------------------------------------------------------')
carrier2.getStatus();
console.log();
console.log();

carrier1.fill();
carrier2.fill();
console.log('==============================================================================');
console.error('  Both refilled');
console.log('==============================================================================');
carrier1.getStatus();
console.log('          --------------------------------------------------------------------')
carrier2.getStatus();
console.log();
console.log();

let turn = 1;
while (carrier1.isAlive() && carrier2.isAlive()) {
  carrier1.fight(carrier2);
  carrier1.fill();
  console.log('==============================================================================');
  console.error(`  Turn: ${turn}  1st Carrier attacks and refills`);
  console.log('==============================================================================');
  carrier1.getStatus();
  console.log('          ------------------------------------------------------------')
  carrier2.getStatus();

  carrier2.fight(carrier1);
  carrier2.fill();
  console.log('          ====================================================================');
  console.error(`            2nd Carrier attacks and refills`);
  console.log('          ====================================================================');
  carrier1.getStatus();
  console.log('          ------------------------------------------------------------')
  carrier2.getStatus();
  console.log();
  console.log();
  turn++;
}

if (carrier1.isAlive()) { console.log('///////////////////////////  Carrier 2 is dead  ///////////////////////////');
} else { console.log('///////////////////////////  Carrier 1 is dead  ///////////////////////////') };