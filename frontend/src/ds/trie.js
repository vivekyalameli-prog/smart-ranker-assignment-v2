/*
TODO: Implement Trie with insert(word) and suggest(prefix, k=8)
*/
class TrieNode {
  constructor(){ this.children = {}; this.end = false; }
}
class Trie {
  constructor(){ this.root = new TrieNode(); }
  insert(word){
    let node = this.root;
    for(const ch of (word||'').toLowerCase()){
      if(!node.children[ch]) node.children[ch]=new TrieNode();
      node = node.children[ch];
    }
    node.end = true;
  }
  suggest(prefix, k=8){
    const res = [];
    const node = this._findNode(prefix);
    if(!node) return res;
    const dfs = (n, path)=>{
      if(res.length>=k) return;
      if(n.end) res.push(path);
      for(const c of Object.keys(n.children)) dfs(n.children[c], path + c);
    };
    dfs(node, prefix.toLowerCase());
    return res;
  }
  _findNode(prefix){
    let node = this.root;
    for(const ch of (prefix||'').toLowerCase()){
      if(!node.children[ch]) return null;
      node = node.children[ch];
    }
    return node;
  }
}
module.exports = { Trie };
