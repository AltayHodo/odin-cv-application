import { useState } from 'react';

function Experience({ onSave }) {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [experienceArray, setExperienceArray] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function saveInfo(e) {
    e.preventDefault();
    const experienceInfo = {
      company,
      position,
      startDate,
      endDate,
      location,
      description,
    };
    let newExperienceArray
    if(editIndex !== null){
      newExperienceArray = [...experienceArray]
      newExperienceArray[editIndex] = experienceInfo
      setEditIndex(null)
    }else{
      newExperienceArray = [...experienceArray, experienceInfo]
    }
    setExperienceArray(newExperienceArray)
    onSave(newExperienceArray)

    setCompany('');
    setPosition('');
    setStartDate('');
    setEndDate('');
    setLocation('');
    setDescription('');
    document.querySelector('.experience-form').reset()
  }

  function handleEdit(index){
    setEditIndex(index)
    const experience = experienceArray[index]
    setCompany(experience.company)
    setPosition(experience.position)
    setStartDate(experience.startDate)
    setEndDate(experience.endDate)
    setLocation(experience.location)
    setDescription(experience.description)
  }

  function handleDelete(index){
    const newExperienceArray = experienceArray.filter((_, i) => i !== index)
    setExperienceArray(newExperienceArray)
    onSave(newExperienceArray)
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
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
        <label htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
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
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button type="submit">Save</button>
      </form>
      <div>
        <h3>Added Experiences</h3>
        <ul>
          {experienceArray.map((exp, index) => (
            <li key={index}>
              {exp.company}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Experience;
