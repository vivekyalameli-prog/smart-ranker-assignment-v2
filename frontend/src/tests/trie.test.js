const { Trie } = require('../ds/trie');
test('Trie suggests inserted words by prefix', ()=>{
  const t = new Trie();
  t.insert('react'); t.insert('redux'); t.insert('ruby');
  const s = t.suggest('re');
  expect(s).toEqual(expect.arrayContaining(['react','redux']));
});
