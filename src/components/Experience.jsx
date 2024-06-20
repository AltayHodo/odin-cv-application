import { useState } from 'react';

function Experience({ onSave }) {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  function saveInfo(e) {
    e.preventDefault();
    const educationInfo = {
      company,
      position,
      startDate,
      endDate,
      location,
      description,
    };
    onSave(educationInfo);
  }

  return (
    <>
      <h2>Experience</h2>
      <form action="" className="experience-form" onSubmit={saveInfo}>
      <label htmlFor="position">Job Title</label>
        <input
          type="text"
          name="position"
          id="position"
          onChange={(e) => setPosition(e.target.value)}
        />
        <label htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          id="company"
          onChange={(e) => setCompany(e.target.value)}
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
        <label htmlFor="description">Description</label>
        <input
          type="textarea"
          name="description"
          id="description"
          placeholder="Enter Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default Experience;
