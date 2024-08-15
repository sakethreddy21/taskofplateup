import React from 'react';
import './desk-styles/SearchBar.css';
import { Search, MapPin, IdCard } from 'lucide-react';

function SearchBar() {
  return (
    <section className="search-bar">
      <div className="facility-wrapper">
        <Search className="search-icon" size={24} />
        <input className="facility" type="text" placeholder="Condition, procedure, specialty..." />
      </div>
      <div className="location-wrapper">
        <MapPin className="map-icon" size={24} fill='#8B8E9C' />
        <input className="location" type="text" placeholder="City, state, or zipcode" />
      </div>
      <div className="insurance-wrapper">
        <IdCard className="id-card-icon" size={24} />
        <input className="insurance" type="text" placeholder="Insurance carrier" />
      </div>
      <button>Find now</button>
    </section>
  );
}

export default SearchBar;
