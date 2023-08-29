import { useState } from "react";

import "./App.css";
import { Users } from "./user";

function App() {
  const [query, setQuery] = useState("");
  console.log(query);

  return (
    <div className="app">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search..."
        className="search"
      />

      <ul className="list">
        <h2>Usernames</h2>
        {Users.filter((use) => use.username.toLowerCase().includes(query)).map(
          (user) => (
            <li key={user.id} className="list-item">
              {user.username}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default App;
