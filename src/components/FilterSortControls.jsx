import React from 'react';

function FilterSortControls({ showGreasedOnly, onToggleGreased, sortBy, onSortChange }) {
  return (
    <div className="ui segment" style={{ display: 'flex', gap: '40px', alignItems: 'center', marginBottom: '20px' }}>
      <div className="field">
        <div className="ui checkbox">
          <input 
            id="filter-greased" 
            type="checkbox" 
            checked={showGreasedOnly} 
            onChange={(e) => onToggleGreased(e.target.checked)} 
          />
          <label htmlFor="filter-greased">Greased Pigs Only?</label>
        </div>
      </div>

      <div className="field" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <label htmlFor="sort-select" style={{ fontWeight: 'bold' }}>Sort by:</label>
        <select 
          id="sort-select" 
          className="ui dropdown" 
          value={sortBy} 
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="none">Default Arrangement</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  );
}

export default FilterSortControls;