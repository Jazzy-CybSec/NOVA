import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [height, setHeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [weight, setWeight] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const profileData = {
      firstName,
      lastName,
      gender,
      heightUnit,
      height,
      weightUnit,
      weight,
    };
    localStorage.setItem('profileData', JSON.stringify(profileData));
    alert('Profile data saved!');
  };

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="f">Female</option>
            <option value="m">Male</option>
          </select>
        </div>
        <div className="form-group height-group">
          <label htmlFor="height">Height:</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
          <select
            value={heightUnit}
            onChange={(e) => setHeightUnit(e.target.value)}
          >
            <option value="cm">cm</option>
            <option value="ft/inches">ft/inches</option>
          </select>
        </div>
        <div className="form-group weight-group">
          <label htmlFor="weight">Weight:</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
          <select
            value={weightUnit}
            onChange={(e) => setWeightUnit(e.target.value)}
          >
            <option value="kg">kg</option>
            <option value="pounds">pounds</option>
          </select>
        </div>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}

export default Profile;
