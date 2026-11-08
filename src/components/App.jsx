import React, { useState } from 'react';
import Nav from './Nav';
import HogForm from './HogForm';
import FilterSortControls from './FilterSortControls';
import HogCard from './HogCard';
import hogsData from '../porkers_data';

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState('none');
  const [hiddenHogNames, setHiddenHogNames] = useState([]);

  const handleAddHog = (newHog) => {
    setHogs([...hogs, newHog]);
  };

  const handleHideHog = (name) => {
    setHiddenHogNames([...hiddenHogNames, name]);
  };

  const visibleHogs = hogs.filter((hog) => {
    if (hiddenHogNames.includes(hog.name)) return false;
    if (showGreasedOnly) return hog.greased;
    return true;
  });

  const sortedHogs = [...visibleHogs].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'weight') {
      return a.weight - b.weight;
    }
    return 0;
  });

  return (
    <div className="App" style={{ padding: '20px' }}>
      <Nav />
      <div className="ui container">
        <HogForm onAddHog={handleAddHog} />
        
        <FilterSortControls 
          showGreasedOnly={showGreasedOnly} 
          onToggleGreased={setShowGreasedOnly}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <div className="ui grid container">
          {sortedHogs.map((hog) => (
            <HogCard 
              key={hog.name} 
              hog={hog} 
              onHideHog={handleHideHog} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;