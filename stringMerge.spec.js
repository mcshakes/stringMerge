import { stringMerge } from './stringMerge';

describe('merge two different strings', () => {
  test('simple and equal length strings', () => {
    let a = "abc"
    let b = "stu"
    expect(stringMerge(a,b)).toEqual('asbtcu');
  });

  test('longer and equal length strings', () => {
    let a = "abcdefgh"
    let b = "stuvwxyz"
    expect(stringMerge(a,b)).toEqual('asbtcudvewfxgyhz');
  });

  test('unequal strings where B string longer', () => {
    let a = "abc"
    let b = "stuvwx"
    expect(stringMerge(a,b)).toEqual('asbtcuvwx');
  });

  test('unequal strings where A string longer', () => {
    let a = "abcdefgh"
    let b = "st"

    expect(stringMerge(a,b)).toEqual('asbtcdefgh');
  });
});
