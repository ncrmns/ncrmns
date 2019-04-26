'use strict';
import { CAB } from './cowsandbulls';
import * as test from 'tape';

test('test bull counter to 1',(t:any) => {
  const cab: CAB = new CAB(1234);
  t.equal(cab.play(2000),`Cow:0, Bull:1`);
  t.end();
});

test('test bull counter to 2',(t:any) => {
  const cab: CAB = new CAB(1234);
  t.equal(cab.play(2400),`Cow:0, Bull:2`);
  t.end();
});

test('test cow counter to 1',(t:any) => {
  const cab: CAB = new CAB(1234);
  t.equal(cab.play(1000),`Cow:1, Bull:0`);
  t.end();
});

test('test cow counter to 2',(t:any) => {
  const cab: CAB = new CAB(1234);
  t.equal(cab.play(1200),`Cow:2, Bull:0`);
  t.end();
});

test('test bull and cow counter to 1',(t:any) => {
  const cab: CAB = new CAB(1234);
  t.equal(cab.play(2200),`Cow:1, Bull:1`);
  t.end();
});