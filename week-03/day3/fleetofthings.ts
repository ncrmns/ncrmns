import { Fleet } from './fleet';
import { Thing } from './thing';

let fleet = new Fleet();

let T1 : Thing = new Thing('Get Milk');
let T2 : Thing = new Thing('Remove obstacles');
let T3 : Thing = new Thing('Stand up');
let T4 : Thing = new Thing('Eat lunch');

fleet.add(T1);
fleet.add(T2);
fleet.add(T3);
fleet.add(T4);

T3.setCompleated(true);
T4.setCompleated(true);

fleet.print();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */
