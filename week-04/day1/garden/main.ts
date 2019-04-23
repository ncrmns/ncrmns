'use strict';
import {Plant} from './plant'
import {Flower} from './flower'
import {Tree} from './tree'
import {Garden} from './garden'

let flower1: Flower = new Flower('yellow');
let flower2: Flower = new Flower('blue');
let tree1: Tree = new Tree('purple');
let tree2: Tree = new Tree('orange');
let garden1: Garden = new Garden();
garden1.flowers.push(flower1);
garden1.flowers.push(flower2);
garden1.trees.push(tree1);
garden1.trees.push(tree2);

garden1.getCurrantStateGarden();
garden1.watering(40);
garden1.getCurrantStateGarden();
garden1.watering(70);
garden1.getCurrantStateGarden();