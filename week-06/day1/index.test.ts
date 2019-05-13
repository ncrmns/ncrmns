import * as test from 'tape';
import {index} from './index';

'use strict';

test('test existing value', t =>{
  let arr:string = 'sdlfjlskjflksjd';
  let value:string = 'k';
  t.equal(index(arr,value),7);
  t.end();
});


test('test not existing value', t =>{
  let arr:string = 'aaaaaaaaaaaa';
  let value:string = 'b';
  t.equal(index(arr,value),-1);
  t.end();
});