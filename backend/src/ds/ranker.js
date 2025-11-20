/*
TODO: Implement ranking logic.
Provide function score(query, item) -> number (higher is better)
Use simple Jaccard similarity of tokens + source metric.
*/
function tokenize(s=''){
  return (''+s).toLowerCase().split(/\W+/).filter(Boolean);
}
function jaccard(a,b){
  const A = new Set(a);
  const B = new Set(b);
  const inter = [...A].filter(x=>B.has(x)).length;
  const union = new Set([...A,...B]).size;
  return union===0?0:inter/union;
}
function score(query, item){
  const qtokens = tokenize(query);
  const titleTokens = tokenize(item.title || '');
  const textSim = jaccard(qtokens, titleTokens);
  let sourceScore = 0;
  if(item.source === 'github') sourceScore = (item.stars || item.stargazers_count || 0)/1000;
  if(item.source === 'openlibrary') sourceScore = (item.edition_count || 0)/1000;
  // freshness small bonus
  let fresh = 0;
  if(item.updated_at) fresh = 0.01;
  return 0.6*textSim + 0.3*sourceScore + fresh;
}
module.exports = { score };
