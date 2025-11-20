import React, {useState} from 'react';
export default function SearchBar({onSearch}){
  const [q,setQ] = useState('');
  return (<div>
    <input aria-label="search" value={q} onChange={e=>{setQ(e.target.value); onSearch(e.target.value);}} placeholder="Search..." />
  </div>);
}
