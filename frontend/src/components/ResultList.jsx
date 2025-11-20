import React, {useEffect,useState} from 'react';
export default function ResultList({query}){
  const [results,setResults]=useState([]);
  useEffect(()=>{
    if(!query) return setResults([]);
    fetch(`/api/search?q=${encodeURIComponent(query)}`).then(r=>r.json()).then(j=>setResults(j.results||[]));
  },[query]);
  return (<div>
    {results.map(r=> <div key={r.id} style={{border:'1px solid #ddd',margin:6,padding:6}}>
      <b>{r.title}</b> <span>({r.source})</span> <div>score: {Number(r.score).toFixed(3)}</div>
    </div>)}
  </div>);
}
