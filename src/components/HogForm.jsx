import React, { useState } from 'react';

function HogForm({ onAddHog }) {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [weight, setWeight] = useState('');
  const [greased, setGreased] = useState(false);
  const [medal, setMedal] = useState('bronze');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !weight) return;

    const newHog = {
      name,
      specialty,
      weight: parseFloat(weight),
      greased,
      'highest medal achieved': medal,
      image: image || 'https://placeholder.com'
    };

    onAddHog(newHog);

    setName('');
    setSpecialty('');
    setWeight('');
    setGreased(false);
    setMedal('bronze');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="ui form segment" style={{ marginBottom: '20px' }}>
      <h2>Register New Competitor</h2>
      <div className="three fields">
        <div className="field">
          <label htmlFor="hog-name">Name:</label>
          <input 
            id="hog-name" 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div className="field">
          <label htmlFor="hog-specialty">Specialty:</label>
          <input 
            id="hog-specialty" 
            type="text" 
            value={specialty} 
            onChange={(e) => setSpecialty(e.target.value)} 
          />
        </div>
        <div className="field">
          <label htmlFor="hog-weight">Weight:</label>
          <input 
            id="hog-weight" 
            type="number" 
            step="0.1" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
          />
        </div>
      </div>

      <div className="three fields" style={{ alignItems: 'center' }}>
        <div className="field">
          <label htmlFor="hog-image">Image URL</label>
          <input 
            id="hog-image" 
            type="text" 
            value={image} 
            onChange={(e) => setImage(e.target.value)} 
          />
        </div>
        <div className="field">
          <label htmlFor="hog-medal">Highest Medal Achieved</label>
          <select id="hog-medal" value={medal} onChange={(e) => setMedal(e.target.value)}>
            <option value="bronze">Bronze</option>
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
            <option value="platinum">Platinum</option>
          </select>
        </div>
        <div className="field" style={{ paddingLeft: '15px' }}>
          <div className="ui checkbox">
            <input 
              id="hog-form-greased" 
              type="checkbox" 
              checked={greased} 
              onChange={(e) => setGreased(e.target.checked)} 
            />
            <label htmlFor="hog-form-greased">Greased?</label>
          </div>
        </div>
      </div>

      <button className="ui button blue" type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;