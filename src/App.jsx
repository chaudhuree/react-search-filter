import { useState } from 'react';
import './App.css';
import { Users } from './users';

function App() {
  const [query,setQuery]=useState(null)
  console.log(query);
  return (
    <div className="app">
      <input type="text" className="search" placeholder="search.." onChange={e=>setQuery(e.target.value)} />
      <ul className="list">
        {Users.map(user => <li className="listItem" key={user.id}>{user.first_name}</li>
        )}

        <li className="listItem">chaudhuree</li>
      </ul>
    </div>
  )
}

export default App
