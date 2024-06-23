import { useState } from 'react';

function Education({ onSave }) {
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [educationArray, setEducationArray] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function saveInfo(e) {
    e.preventDefault();
    const educationInfo = {
      school,
      degree,
      startDate,
      endDate,
      location,
    };
    let newEducationArray;
    if (editIndex !== null) {
      newEducationArray = [...educationArray];
      newEducationArray[editIndex] = educationInfo;
      setEditIndex(null);
    } else {
      newEducationArray = [...educationArray, educationInfo];
    }
    setEducationArray(newEducationArray);
    onSave(newEducationArray);

    setSchool('');
    setDegree('');
    setStartDate('');
    setEndDate('');
    setLocation('');
    document.querySelector('.education-form').reset();
  }

  function handleEdit(index) {
    setEditIndex(index);
    const education = educationArray[index];
    setSchool(education.school);
    setDegree(education.degree);
    setStartDate(education.startDate);
    setEndDate(education.endDate);
    setLocation(education.location);
  }

  function handleDelete(index) {
    const newEducationArray = educationArray.filter((_, i) => i !== index);
    setEducationArray(newEducationArray);
    onSave(newEducationArray);
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
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          required
        />
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          name="degree"
          id="degree"
          placeholder="Ex: Computer Science, BS"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          required
        />
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          name="startDate"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          name="endDate"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          placeholder="City, State/Country"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button type="submit">Save</button>
      </form>
      <div>
        <h3>Added educations</h3>
        <ul>
          {educationArray.map((edu, index) => (
            <li key={index}>
              {edu.school}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Education;
