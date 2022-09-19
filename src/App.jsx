import React, { useState } from "react";
import "./App.css";
import { Users } from "./users";
import Table from "./table";

function App() {
  const [query, setQuery] = useState("");
  // const data= Users.filter(user=>user.first_name.toLowerCase().match(query))
  // const data= Users.filter(user=>user.first_name.toLowerCase().includes(query))
  // console.log(data);

  //  for multi-search function

  const search = (data) => {
    return data.filter((user) => {
      return (
        user.first_name.toLowerCase().includes(query.toLowerCase()) ||
        user.last_name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
      );
    });
  };
  // console.log(search(Users));
  return (
    <div className="app">
      <input
        type="text"
        className="search"
        placeholder="search.."
        onChange={(e) => setQuery(e.target.value)}
      />
      {/*<ul className="list">*/}
      {/*  {query &&*/}
      {/*    Users.slice(0,20).filter((user) =>*/}
      {/*      user.first_name.toLowerCase().includes(query.toLowerCase())*/}
      {/*    ).map((user) => (*/}
      {/*      <li className="listItem" key={user.id}>*/}
      {/*        {user.first_name}*/}
      {/*      </li>*/}
      {/*    ))}*/}
      {/*</ul>*/}
      <Table data={search(Users)} />
    </div>
  );
}

export default App;
