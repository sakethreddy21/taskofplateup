import React from 'react';
import './mobsearchbar.css';
import { Search, MapPin, IdCard } from 'lucide-react';

function MobileSearchBar() {
  return (
    <div className='mobile-search'>
    <section className="mobsearch-bar">
      <div className="mobfacility-wrapper">
        <Search className="mobsearch-icon" size={24} />
        <input className="mobfacility" type="text" placeholder="Condition, procedure, specialty..." />
      </div>
      <div className="moblocation-wrapper">
        <MapPin className="mobmap-icon" size={24} fill='#8B8E9C' />
        <input className="moblocation" type="text" placeholder="City, state, or zipcode" />
      </div>
      <div className="mobinsurance-wrapper">
        <IdCard className="mobid-card-icon" size={24} />
        <input className="mobinsurance" type="text" placeholder="Insurance carrier" />
      </div>
      <button>Find now</button>
    </section>
    </div>
  );
}

export default MobileSearchBar;