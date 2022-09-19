import React, { useState } from "react";
import "./App.css";
import { Users } from "./users";
import Table from "./table";

function App() {
  const [query, setQuery] = useState(null);
  // const data= Users.filter(user=>user.first_name.toLowerCase().match(query))
  // const data= Users.filter(user=>user.first_name.toLowerCase().includes(query))
  // console.log(data);
  return (
    <div className="app">
      <input
        type="text"
        className="search"
        placeholder="search.."
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="list">
        {query &&
          Users.filter((user) =>
            user.first_name.toLowerCase().includes(query.toLowerCase())
          ).map((user) => (
            <li className="listItem" key={user.id}>
              {user.first_name}
            </li>
          ))}
      </ul>
        <Table></Table>
    </div>
  );
}

export default App;
