'use strict';
import { Animal } from './animal';
import * as test from 'tape';

test('check deafult hunger',(t:any) => {
  const animal: Animal = new Animal();
  t.equal(animal.hunger, 50);
  t.end();
});


test('check deafult thirst',(t:any) => {
  const animal: Animal = new Animal();
  t.equal(animal.thirst, 50);
  t.end();
});


test('check gethunger()',(t:any) => {
  const animal: Animal = new Animal();
  t.equal(animal.getHunger(), 50);
  t.end();
});


test('check eat()',(t:any) => {
  const animal: Animal = new Animal();
  animal.eat();
  t.equal(animal.hunger, 49);
  t.end();
});


test('check drink()',(t:any) => {
  const animal: Animal = new Animal();
  animal.drink();
  t.equal(animal.thirst, 49);
  t.end();
});


test('check play() to hunger',(t:any) => {
  const animal: Animal = new Animal();
  animal.play();
  t.equal(animal.hunger, 51);
  t.end();
});


test('check play() to thirst',(t:any) => {
  const animal: Animal = new Animal();
  animal.play();
  t.equal(animal.thirst, 51);
  t.end();
});