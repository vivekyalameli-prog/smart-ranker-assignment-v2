const express = require('express');
const router = express.Router();
const lru = require('../ds/lru');
const ranker = require('../ds/ranker');

// Simple in-memory cache instance (candidate to implement actual LRU)
const cache = new lru.LRU(50);

router.get('/', async (req,res)=>{
  const q = (req.query.q||'').trim();
  if(!q) return res.json({results:[]});
  const key = `q:${q}`;
  const cached = cache.get(key);
  if(cached) return res.json({results: cached, cache: 'HIT'});
  // Minimal proxy behaviour: return placeholder merged results
  const merged = [
    {id: 'gh1', title: `${q} - GitHub Repo`, source: 'github', stars: 120, updated_at: '2024-01-01'},
    {id: 'ol1', title: `${q} - Book`, source: 'openlibrary', edition_count: 5, first_publish_year: 2019}
  ];
  const scored = merged.map(item=> ({...item, score: ranker.score(q,item)}));
  cache.set(key, scored);
  res.json({results: scored, cache: 'MISS'});
});

module.exports = router;
