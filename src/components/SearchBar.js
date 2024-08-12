import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <section className="search-bar">
      <input type="text" placeholder="Condition, procedure, specialty..." />
      <input type="text" placeholder="City, state, or zipcode" />
      <input type="text" placeholder="Insurance carrier" />
      <button>Find now</button>
    </section>
  );
}

export default SearchBar;
