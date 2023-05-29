import { ChangeEvent, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

const Search = () => {
  // state to store the input value
  const [query, setQuery] = useState("");
  // useDebounce hook with an initial value and a delay of 500ms
  const debouncedQuery = useDebounce(query, 500);

  // function to handle the input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // function to perform the search with the debounced query
  const handleSearch = () => {
    console.log("Searching for", debouncedQuery);
  };

  // render an input element and a button element
  return (
    <div>
      <input
        placeholder="Search..."
        type="text"
        value={query}
        onChange={handleChange}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
