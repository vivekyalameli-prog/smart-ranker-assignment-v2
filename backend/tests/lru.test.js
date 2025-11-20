const { LRU } = require('../src/ds/lru');
test('LRU evicts oldest when limit exceeded', ()=>{
  const l = new LRU(3);
  l.set('a',1); l.set('b',2); l.set('c',3);
  expect(l.get('a')).toBe(1); // a becomes recent
  l.set('d',4); // should evict b
  expect(l.get('b')).toBe(null);
  expect(l.get('a')).toBe(1);
  expect(l.get('c')).toBe(3);
  expect(l.get('d')).toBe(4);
});
