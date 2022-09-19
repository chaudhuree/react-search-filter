import { useState } from 'react';
import './App.css';
import { Users } from './users';

function App() {
  const [query,setQuery]=useState(null)
    // const data= Users.filter(user=>user.first_name?.match(query))
  // console.log(data);
  return (
    <div className="app">
      <input type="text" className="search" placeholder="search.." onChange={e=>setQuery(e.target.value)} />
      <ul className="list">
        {Users.map(user => <li className="listItem" key={user.id}>{user.first_name}</li>
        )}
      </ul>
    </div>
  )
}

export default App
