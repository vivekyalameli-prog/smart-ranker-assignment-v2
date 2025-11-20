const { score } = require('../src/ds/ranker');
test('Ranker assigns higher score when title matches query words', ()=>{
  const q = 'react hooks';
  const a = {title: 'React Hooks Guide', source:'github', stars:300};
  const b = {title: 'Cooking Recipes', source:'openlibrary', edition_count:2};
  expect(score(q,a)).toBeGreaterThan(score(q,b));
});
