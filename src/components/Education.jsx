import { useState } from 'react';

function Education({ onSave }) {
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');

  function saveInfo(e) {
    e.preventDefault();
    const educationInfo = {
      school,
      degree,
      startDate,
      endDate,
      location,
    };
    onSave(educationInfo);
  }

  return (
    <>
      <h2>Education</h2>
      <form action="" className="education-form" onSubmit={saveInfo}>
        <label htmlFor="school">School</label>
        <input
          type="text"
          name="school"
          id="school"
          onChange={(e) => setSchool(e.target.value)}
        />
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          name="degree"
          id="degree"
          placeholder="Ex: Computer Science, BS"
          onChange={(e) => setDegree(e.target.value)}
        />
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          name="startDate"
          id="startDate"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          name="endDate"
          id="endDate"
          onChange={(e) => setEndDate(e.target.value)}
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          placeholder="City, State/Country"
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default Education;
