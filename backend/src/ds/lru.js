/*
TODO: Implement a proper LRU cache.
API:
  class LRU {
    constructor(limit = 50) {}
    get(key) -> value or null
    set(key, value)
  }
Tests expect eviction when > limit, and that get updates recency.
*/
class LRU {
  constructor(limit = 50){
    this.limit = limit;
    this.map = new Map();
  }
  get(key){
    if(!this.map.has(key)) return null;
    const v = this.map.get(key);
    // move to end
    this.map.delete(key);
    this.map.set(key, v);
    return v;
  }
  set(key,value){
    if(this.map.has(key)) this.map.delete(key);
    else if(this.map.size >= this.limit) {
      // evict least-recent (first key)
      const first = this.map.keys().next().value;
      this.map.delete(first);
    }
    this.map.set(key,value);
  }
}
module.exports = { LRU };
