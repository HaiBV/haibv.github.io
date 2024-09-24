import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
// you should import `lodash` as a whole module
import { debounce } from 'lodash';
import axios from 'axios';

const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class

export default function Autocomplete({ onSelectItem }) {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const search = async (query) => {
    setIsLoading(true);
    const response = await axios.get(`${ITEMS_API_URL}?q=${query}`);
    setIsLoading(false);

    return response.data;
  }

  const debouncedSearch = React.useRef(
    debounce(async (query) => {
      setResults(await search(query));
    }, DEBOUNCE_DELAY)
  ).current;

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleChange = (e) => {
    debouncedSearch(e.target.value);
  }

  return (
    <div className="wrapper">
      <div className={classnames({"control": true,  "is-loading": isLoading})}>
        <input type="text" className="input" onChange={handleChange} />
      </div>
      {results.length > 0 && (
        <div class="list is-hoverable">
          {results.map(result => (
            <a key={result} class="list-item" onClick={() => onSelectItem(result)}>{result}</a>
          ))}
        </div>
      )}
    </div>
  );
}
