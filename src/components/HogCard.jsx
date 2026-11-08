import React, { useState } from 'react';

function HogCard({ hog, onHideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ui eight wide column">
      <div 
        className="ui card fluid segment" 
        aria-label="hog card"
        onClick={() => setShowDetails(!showDetails)}
        style={{ cursor: 'pointer' }}
      >
        <div className="image">
          <img src={hog.image} alt={`Photo of ${hog.name}`} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
        </div>
        <div className="content">
          <h3>{hog.name}</h3>
        </div>
        
        {showDetails && (
          <div className="extra content" style={{ textAlign: 'left' }}>
            <p>{`Specialty: ${hog.specialty || 'None'}`}</p>
            <p><strong>Weight:</strong> <span>{hog.weight}</span> kg</p>
            <p>{hog.greased ? 'Greased' : 'Nongreased'}</p>
            <p style={{ textTransform: 'capitalize' }}>
              {hog['highest medal achieved']}
            </p>
          </div>
        )}

        <div className="extra content" onClick={(e) => e.stopPropagation()}>
          <button className="ui compact button red basic fluid" onClick={() => onHideHog(hog.name)}>
            Hide Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default HogCard;