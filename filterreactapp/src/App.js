import { useState } from "react";

import "./App.css";
import { Users } from "./user";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");

  const keys = ["name", "username", "email"];

  const Search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className="app">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search..."
        className="search"
      />
      <Table data={Search(Users)} />
    </div>
  );
}

export default App;
