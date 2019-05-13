'use strict';
import * as test from 'tape';
import {anagram} from './anagram';

test('', t=> {
t.equal(anagram('abba','bbaa'),true);
t.end();
});

test('', t=> {
  t.equal(anagram('abba','acca'), false);
  t.end();
});