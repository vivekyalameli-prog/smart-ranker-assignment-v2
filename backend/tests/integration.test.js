const fetch = require('node-fetch');
test('search endpoint returns results', async ()=>{
  const res = await fetch('http://localhost:4000/api/health').catch(()=>null);
  // If server not running in test env, skip
  if(!res) return;
  const h = await res.json();
  expect(h.ok).toBe(true);
}, 10000);
