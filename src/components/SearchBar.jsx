import { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") onSearch(input.trim());
    setInput("");
  };

  return (
    <form onSubmit={submit} className="search-bar">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search city..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
